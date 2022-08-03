import React from "react";

import { AiOutlinePlusCircle } from "react-icons/ai";

import MainHeader from "../components/MainHeader";
import Sidebar from "../components/Sidebar";
import Table from "../components/Table";
import ItemsOrderForm from "../components/ItemsOrderForm";
import UserContent from "../components/UserContent";

import "../assets/home.css";

const Home = () => {
  return (
    <div className="home">
      <MainHeader />

      <div className="main">
        <Sidebar />

        <div className="main-content">
          <div className="main-header">
            <h1 className="title">Order Notes</h1>

            <button className="btn-add">
              <AiOutlinePlusCircle />
              New Order Note
            </button>
          </div>

          <div className="main-body">
            <div className="items-row">
              <h2>Order Info</h2>
              <select name="" id="">
                <option>Status</option>
              </select>
            </div>

            <div className="items-row">
              <ItemsOrderForm />
            </div>

            <div className="items-row">
              <Table />
            </div>

            <UserContent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
