import { pick } from 'lodash';
import {
    LogPageViewArgs,
    LogEventArgs,
    LogProductImpressionArgs,
    LogProductAddToCartArgs
  } from './types'
  
const googlePayloads = {
    logPageView: {
        event: 'pageview',
        payload: ({ page, title, preprocessedData = {} }: LogPageViewArgs) => ({
            page,
            title,
            ...preprocessedData,
        }),
    },

    // cpg.method("payload").code(".*LogPageViewArgs.*").astChildren.isBlock.l
    // cpg.call.code(".*tmp.*logPageView.*=.*").astChildren.isBlock.l

    logEvent: {
        event: 'event',
        payload: ({ category, action, label, value, preprocessedData = {} }: LogEventArgs) => ({
            eventCategory: category,
            eventAction: action,
            eventLabel: label,
            eventValue: value,
            ...preprocessedData,
        }),
    },

    logProductImpression: {
        event: 'productImpressions',
        payload: ({ product, location, preprocessedData = {} }: LogProductImpressionArgs) => {
            return {
                ...pick(product, ['id', 'name', 'ext_id', 'ic_product_id']),
                ecommerce: {
                    impressions: [
                        {
                            price: product.sale_price || product.base_price,
                            category:
                                product.categories?.length > 0
                                ? product.categories[product.categories?.length - 1]?.name
                                : '',
                            list: location,
                        },
                    ],
                },
                ...preprocessedData,
            }
        },
    },
    logProductAddToCart: {
        event: 'productAddToCart',
        payload: ({ product, logLocation, productSource, preprocessedData = {} }: LogProductAddToCartArgs) => {
          const products = [
            {
                //   ...pick(product, ['id', 'name', 'ext_id', 'ic_product_id']),
              price: product.sale_price || product.base_price,
              category:
                product.categories.length > 0
                  ? product.categories[product.categories.length - 1].name
                  : '',
            },
          ]
          return {
            ecommerce: {
              add: {
                actionField: { list: logLocation, productSource},
                products,
              },
              purchase: undefined,
            },
            ...preprocessedData,
          }
        },
    }
};


export const logSegmentEvent = createAsyncThunk(
  'analytics/logSegmentEvent',
  async ({ name, segmentArgs = {} }: LogSegmentEventArg, { getState }) => {
    const state = getState() as RootState
    const config = configSelector(state)
    const analyticMeta = analyticsSelector(state)
    const page = getWebUrl(window.location.href)
    const unataAppVersion = config.version
    const appInfo = await getAppInfo()
    const unataMobileAppVersion = appInfo.version
    const unataPageViewId = getPageViewId()

    const newArgs = {
      ...segmentArgs,
      meta: analyticMeta,
      unataAppVersion,
      unataMobileAppVersion,
      unataPageViewId,
    }

    analytics.log({
      data: {
        segmentData: { page, segmentArgs: newArgs },
        segmentName: name,
      },
      event: 'event',
    })
  }
)

export default googlePayloads
