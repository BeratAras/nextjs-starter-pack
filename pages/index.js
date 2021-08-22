import React, {useEffect, useState} from 'react'
//Layout
import Layout from "./layout";
//Package
import {useDispatch, useSelector} from "react-redux";
import Cookie from 'universal-cookie'
import {CircularProgress} from "@material-ui/core";


export default function Home(){
    return (
        <Layout>
            <div className="main">
                <h1>Hey! I'm a NextJs Starter Pack for Berat! <br/>If you want maybe for you too?</h1>
            </div>

            <style jsx>{`
                .main{
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  height: 100vh;
                  h1{
                    font-size: 40px;
                    text-align: center;
                    line-height: 1.5;
                    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
                  }
                }
            `}</style>
        </Layout>
    )
}
