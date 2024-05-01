
import googlePayloads from './googlepayloads'
import TagManager from 'react-gtm-module'

interface StoreProduct {
    product_id: string;
    product_price: number;
    product_qrcode: string;
}

export const logCheckoutStep = (obj, product: StoreProduct) => {
    const { step, option, preprocessedData } = obj
    const products = {
        p1: {
            q1: "q1"
        },
        p2: "p2"
    };
    if (!step || !products) return
    globalThis.dataLayer.push({ /* <=== globalThis */ 
        event: googlePayloads.logProductImpression.event,
        nestedKey: {
            nested1: "N1",
            nestedDeep: {
                nestedDeep1: "N1.11"
            }
        },
        latitude: obj.latitude,
        testPayload: googlePayloads.logProductImpression.payload({}),
        product: product
    });

    // const tagManagerArgs={
    //     gtmId:'GTM-000000',
    //     dataLayer:{
    //         userId:'001',
    //         userProject:'project'
    //     }
    // };
    // TagManager.initialize(tagManagerArgs);
    // TagManager.datalayer();
    // this.googleTagManager.(configure|track)
    // customers/store/app/assets/javascripts/landing/domain_api/Actions/Actions.js
    // customers/customers-backend/layers/orchestration_layer/orchestrators/checkout_orchestrators/get_post_order_confirmation_analytics_actions/orchestrator.rb
    // npm_analytics.js


    // if (this.props.trackAnalytics) {
    //     const tracking_props = this.props.trackAnalytics
    //     tracking_props.product_id = Number(product_id)
    //     tracking_props.source_value = product_id
    //     ICAnalytics.track('signup', 'view_item', tracking_props)
    //   } else if (this.props.tracking_params) {
    //     const tracking_props = this.props.tracking_params
    //     tracking_props.product_id = Number(product_id)
    //     tracking_props.source_value = product_id
    //     ICAnalytics.track('signup', 'view_item', tracking_props)
    //   }



    // const initLayer = {
    //     ahoy_visit_token: ahoy_visit_token ? template`${ahoy_visit_token}`.toString() : undefined,
    //     ahoy_visitor_token: ahoy_visitor_token ? template`${ahoy_visitor_token}`.toString() : undefined,
    //     userId: currentUser?.id, /* <===  */ 
    // };

    // globalThis.dataLayer.push(JSON.stringify(initLayer));
    // window.dataLayer.push(${scriptSafe(JSON.stringify(initLayer))});

    globalThis.dataLayer.push({
        event: googlePayloads.logProductImpression.event,
        ...googlePayloads.logProductImpression.payload({ product, logLocation, productSource, preprocessedData }),
    });

    // //   // UA ecommerce event 'ec:addOffer'
    globalThis.gtag('event', 'view_promotion', { /* <=== globalThis */ 
        id: offer.id,
        name: offer.name,
        promotion_id: offer.id,
        promotion_name: offer.name,
    })
    logSegmentEvent({ /* <===  */ 
        name: SEGMENT_EVENTS.CHAT_MESSAGE_RECEIVED,
        segmentArgs: {
            productDetail: { ...product, position: "kne" },
        },
    });

    // const clipCouponPayload = getAddOfferEventPayload(
    //     updatedOffer,
    //     shoppingList?.cart_instance_id,
    //     'store.add_offer_PDP'
    // )
    // dispatch(logSegmentEvent(clipCouponPayload))


    eventEmitter.emit(EVENT_TYPES.LOG_SEGMENT_EVENT,{
        name: 'express.click_button', 
        segmentArgs: {
            name: label,
            placement_name: ExpressPlacements.SIDECART,
            source: window.location.pathname,
            success: true
        }
    });

    analyticsService.log({
        data: {
            action: 'click',
            category,
            meta: service.analyticsMeta,
            name: 'checkout_click',
            value
        },
        event: 'event'
    });

    // feAnalytics.log({
    //     event: 'event',
    //     data: {
    //         segmentData: {
    //             segmentArgs,
    //             userInfo: payload.userInfo
    //         },
    //         segmentName: event
    //     }
    // });


}

// import WebAnalyticsPlugin from '@instacart/enterprise-core/plugins/webAnalyticsPlugin'

// WebAnalyticsPlugin.addListener('trackEvent', payload => {
//     if (payload?.name) {
//         const { name, ...segmentArgs } = payload
//         const segmentEvent: LogSegmentEventArg = {
//         name,
//         segmentArgs,
//         }

//         dispatch(logSegmentEvent(segmentEvent))

//         call('mobileAppAnalyticsEvent', { name, segmentArgs })
//     }
// });

// const func = {
//     getShopSelectFilterEventPayload: (segmentFilters) => ({
//         name: 'store.select_filter',
//         segmentArgs: {
//           filters,
//           ...segmentFilters,
//         },
//     }),
//     getAddOfferEventPayload: (offer, card_id, event_name) => ({
//         name: event_name,
            // "segmentArgs.card_id": "card_id",
            // "segmentArgs.offer.clipped": "clipped",
            // "segmentArgs.offer.completion_count": "completion_count",
            // "segmentArgs.offer.condition": "condition || offerCondition",
            // "segmentArgs.offer.days": "days",
            // "segmentArgs.offer.description": "description",
            // "segmentArgs.offer.id": "id",
            // "segmentArgs.offer.limit_basket": "limit_basket",
            // "segmentArgs.offer.name": "name || offerName",
            // "segmentArgs.offer.offerReward": "offerReward",
            // "segmentArgs.offer.promo_code": "promo_code",
            // "segmentArgs.offer.reward": "offerReward ? { ...reward, ...offerReward } : reward",
            // "segmentArgs.offer.source": "source",
            // "segmentArgs.offer.terms": "terms",
            // "segmentArgs.offer.type": "type || offerType"
//     }),
//     getShopViewSegmentLogEventPayload: ({
//         response,
//         category,
//         params,
//         departmentsLang,
//     }) => ({
//         "name": "store.view_department",
//         segmentArgs: {
//             department_name: category ? category.name : departmentsLang,
//             department_type: category?.level || category?.level === 0 ? `L${category.level + 1}` : 'L0',
//             filters: {
//               brand_names: 'brand_names' in params ? params.brand_names : undefined,
//               tags: params.tags,
//             },
//             // If response
//             products_results_count: products_results.length,
//             products_results_page: params.page ?? 1,
//             products_value: category ? category.name : departmentsLang
//         }
//     }),
//     getSearchRecipesSegmentLogEventPayload: () => ({}),
//     getSearchSegmentLogEventPayload: () => ({}),
//     getSaveRecipeLogEventPayload: () => ({})
// }


// const clipCouponPayload = getAddOfferEventPayload(
//     offer,
//     shoppingList?.cart_instance_id,
//     'store.add_offer_sideCart'
// )
// dispatch(logSegmentEvent(clipCouponPayload))
