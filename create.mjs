/* eslint-disable no-console */

import { PangeaConfig, AuditService, PangeaErrors } from "pangea-node-sdk";

const token = "token";
const config = new PangeaConfig({ domain: "aws.us.pangea.cloud" });
// const audit = new AuditService(token, config);
const audit = new AuditService(token, config);
(async () => {
    const data = {
      action: "log entry",
      actor: "GS",
      target: "example",
      status: "ok",
      message: "hello",
      source: "terminal",
    };
  
    console.log("Logging: %s", data.message, data.status,data.actor);
      const logResponse = await audit.log(data);
      console.log("Response: %s", logResponse.result);
//  const data = {
//    message: "Hello, World!",
 // };
//  const data =  await audit.search("status:ok",50,100);
//  try {
  
  //    var i = 0
   //   data.result.events.forEach((row) => {
         
    //                console.log("Logging: %s",data.result.events[i].envelope.event);
   //                 i = i + 1
      
   //   });
  
   
})();
