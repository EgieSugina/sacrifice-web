import { Button, Input } from "antd";
import React, { useEffect, useState } from "react";
export default function Request() {
  const ListClass = [
    "Warrior",
    "Ranger",
    "Sorceress",
    "Berserker",
    "Tamer",
    "Musa",
    "Maehwa",
    "Valkyrie",
    "Kunoichi",
    "Ninja",
    "Wizard",
    "Witch",
    "Dark Knight",
    "Striker",
    "Mystic",
    "Archer",
    "Lahn",
    "Shai",
    "Guardian",
    "Hashashin",
    "Nova",
    "Sage",
    "Corsair",
    "Drakania",
  ];
 // TODO -- SHIT LIKE HAVEN 
 //https://discord.com/api/webhooks/1004212328012710029/kDZLWOi7k2eIAb269S0YYMZXsmMKJ_-zET7VLUHdZ7kS05hxHq7SeLxBnUgFGKPbnfLw
//  {
//   "username": "Sacrifice Tiket",
//   "content": " <@298776326662258688> ",
//   "allowed_mentions": {
//     "parse": ["users"] 
//   }
//  ,
//   "embeds": [
//     {
      
//       "title": "Request Join",
//       "url": "https://google.com/",
 
     
//       "fields": [
//         {
//           "name": "Family Name",
//           "value": "More text",
//           "inline": true
//         },
//         {
//           "name": "Discord ID",
//           "value": "Yup",
//           "inline": true
//         } ,
//         {
//           "name": "Class",
//           "value": "Yup",
//           "inline": true
//         } ,
//         {
//           "name": "AP",
//           "value": "Yup",
//           "inline": true
//         } ,
//         {
//           "name": "AAP",
//           "value": "Yup",
//           "inline": true
//         } ,
//         {
//           "name": "DP",
//           "value": "Yup",
//           "inline": true
//         }  
//       ],
//       "thumbnail": {
//         "url": "https://upload.wikimedia.org/wikipedia/commons/3/38/4-Nature-Wallpapers-2014-1_ukaavUI.jpg"
//       } 
 
     
//     }
//   ]
// }

  return (
    <>
      
        <div className="grid grid-cols-6 gap-6">
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="first-name"
              className="block text-sm font-medium text-gray-700"
            >
              Family Name
            </label>
            <Input
            
              type="text"
              size="large"
              name="first-name"
              id="first-name"
              autoComplete="given-name"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="last-name"
              className="block text-sm font-medium text-gray-700"
            >
              Character Main Name
            </label>
            <Input
              type="text"
              size="large"
              name="last-name"
              id="last-name"
              autoComplete="family-name"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>

          <div className="col-span-6 sm:col-span-4">
            <label
              htmlFor="email-address"
              className="block text-sm font-medium text-gray-700"
            >
              Discord Name <span className=" text-red-600">*Gi#1473</span>
            </label>
            <Input
              type="text"
              size="large"
              name="email-address"
              id="email-address"
              autoComplete="email"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>

          <div className="col-span-6">
            <label
              htmlFor="country"
              className="block text-sm font-medium text-gray-700"
            >
              Main Class
            </label>
            <select
              id="country"
              name="country"
              autoComplete="country-name"
              className="mt-1 block w-full py-2 px-3 border border-gray-300   rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              {ListClass.map((v) => (
                <>
                  <option key={v}>{v}</option>
                </>
              ))}
            </select>
          </div>

          <div className="col-span-6 sm:col-span-6 lg:col-span-2">
            <label
              htmlFor="city"
              className="block text-sm font-medium text-gray-700"
            >
              AP
            </label>
            <Input
              type="number"
              size="large"
              name="city"
              id="city"
              autoComplete="address-level2"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>

          <div className="col-span-6 sm:col-span-3 lg:col-span-2">
            <label
              htmlFor="region"
              className="block text-sm font-medium text-gray-700"
            >
              AAP
            </label>
            <Input
              type="number"
              size="large"
              name="region"
              id="region"
              autoComplete="address-level1"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>

          <div className="col-span-6 sm:col-span-3 lg:col-span-2">
            <label
              htmlFor="postal-code"
              className="block text-sm font-medium text-gray-700"
            >
              DP
            </label>
            <Input
              type="number"
              size="large"
              name="postal-code"
              id="postal-code"
              autoComplete="postal-code"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <div className="col-span-6">
            <label
              htmlFor="street-address"
              className="block text-sm font-medium text-gray-700"
            >
              Messages
            </label>
            <Input
              type="text"
              size="large"
              name="street-address"
              id="street-address"
              autoComplete="street-address"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
        </div>
       
    </>
  );
}
