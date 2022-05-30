// import React from "react";
// import { Redirect, Route } from "react-router-dom";

// function PrivateRouter({ component: Component, ...rest }) {
//   return (
//     <Route
//       {...rest}
//       component={(props) => {
//         if (userInfo && userInfo.isAdmin) {
//           return <Component {...props} />;
//         } else {
//           return <Redirect to={`/login`} />;
//         }
//       }}
//     />
//   );
// }

// export default PrivateRouter;
