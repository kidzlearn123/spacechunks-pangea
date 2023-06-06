/* eslint-disable no-console */

import { PangeaConfig, AuditService, PangeaErrors } from "pangea-node-sdk";


const token = "token";
const config = new PangeaConfig({ domain: "aws.us.pangea.cloud" });
// const audit = new AuditService(token, config);
const audit = new AuditService(token, config);
(async () => {
 //   const data = {
  //    action: "log entry",
 //     actor: "GS",
   //   target: "example",
  //    status: "ok",
  //    message: "hello",
  //    source: "terminal",
  //  };
//  const data = {
//    message: "Hello, World!",
 // };
//  const data =  await audit.search("status:ok",50,100);
    const data =  await audit.search("",50,100);
  try {
   // console.log("Logging: %s",data.result.events[0].envelope.event,data.result.events[1].envelope.event);
  //  const logResponse = await audit.log(data);
  //  console.log("Response: %s",logResponse, logResponse.result);
      var i = 0
      data.result.events.forEach((row) => {
         
                    console.log("Logging: %s",data.result.events[i].envelope.event);
                    i = i + 1
      
      });
  } catch (err) {
    if (err instanceof PangeaErrors.APIError) {
      console.log("Error", err.summary, err.pangeaResponse);
    } else {
      throw err;
    }
  }
})();
