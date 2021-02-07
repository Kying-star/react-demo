/*
 * @Author: your name
 * @Date: 2021-02-07 16:54:53
 * @LastEditTime: 2021-02-07 17:25:21
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /demo/src/router/router.js
 */
import React from 'react';
import { Redirect } from "react-router-dom";
import Home from '../application/Home';
import Recommend from '../application/Recommend';
import Singers from '../application/Singers';
import Rank from '../application/Rank';

export default [
  {
    path: "/",
    component: Home,
    routes: [
      {
        path: "/",
        exact: true,
        render: () => (
          <Redirect to={"/recommend"}/>
        )
      },
      {
        path: "/recommend",
        component: Recommend
      },
      {
        path: "/singers",
        component: Singers
      },
      {
        path: "/rank",
        component: Rank
      }
    ]
  }
]