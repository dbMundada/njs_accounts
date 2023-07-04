// import React from 'react';
// import { UploadToS3 } from 'react-upload-to-s3';

// const App = () => (
//     <UploadToS3
//         awsConfig="your_config_object"
//         onResult={(result) => {
//             console.log('on Result', result);
//         }}
//     />
// );
// export default App;

// export type User =  {
//     email: string;
//     organizationIds: string[];
//     username: string;
//     name: string;
//     gender: string;
// };

// cpg.typeDecl("User").l
// TypeDecl(
//     id = 279518L,
//     aliasTypeFullName = None,
//     astParentFullName = "src/constants/userConstants.ts::program",
//     astParentType = "METHOD",
//     code = """type User = {
//         email: string;
//         organizationIds: string[];
//         username: string;
//         name: string;
//         gender: Gender;
//         emptyInstance?: boolean;
//         commentOnboardingState?: CommentsOnboardingState | null;
//         photoId?: string;
//         };
//     """,
//     columnNumber = Some(value = 7),
//     filename = "src/constants/userConstants.ts",
//     fullName = "src/constants/userConstants.ts::program:User",
//     inheritsFromTypeFullName = ArraySeq(),
//     isExternal = false,
//     lineNumber = Some(value = 10),
//     name = "User",
//     order = 1
// )

// joern> cpg.typeDecl("User").member.l
// res16: List[Member] = List()

// joern> cpg.typeDecl("User").method.l
// res17: List[Method] = List()



// export const DefaultCurrentUserDetails: User = {
//     name: "ANONYMOUS_USERNAME",
//     email: "ANONYMOUS_USERNAME",
//     organizationIds: [],
//     username: "ANONYMOUS_USERNAME",
//     gender: "MALE",
// };

// joern> cpg.identifier("DefaultCurrentUserDetails").id(279546L).l
// res13: List[Identifier] = List(
//   Identifier(
//     id = 279546L,
//     argumentIndex = 1,
//     argumentName = None,
//     code = "DefaultCurrentUserDetails",
//     columnNumber = Some(value = 13),
//     dynamicTypeHintFullName = ArraySeq(),
//     lineNumber = Some(value = 30),
//     name = "DefaultCurrentUserDetails",
//     order = 1,
//     typeFullName = "{ email: __ecma.String; organizationIds: __ecma.String[]; username: __ecma.String; name: __ecma.String; gender: Gender; emptyInstance?: __ecma.Boolean; commentOnboardingState?: CommentsOnboardingState; photoId?: __ecma.String; }"
//   )
// )

// joern> cpg.typeDecl("DefaultCurrentUserDetails").l
// res14: List[TypeDecl] = List()

// Working both member & method nodes getting created
// export interface UserApplication {
//     id: string;
//     name: string;
// }


// const getEnvConfig = (test: {
//     creditCard: string;
//     user: User
// }, test2: { emailId: string; bankAccount: string;  }): void => {
//     fetch('https://dattaprasad.mundada.com', {
//         test, test2
//     })
// }



