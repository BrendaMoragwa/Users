import React, { Component } from "react";
import Table from "../components/Table";
import Filter from "../components/modal";
// /import { Plus, Target, Circle, Smartphone } from "react-feather";
import { Link } from "react-router-dom";
import { render} from 'react-dom';
if(localStorage.userData) window.user=JSON.parse(localStorage.userData)
//console.log(localStorage.userData);

class Users extends Component {
  state = {
    tableData: { data: [] },
    response: { data: [] },
    tableError: false,
    query: {},
    filter: {},
    table_loading: false
  };

  timeout = null;
  render() {
    return (
      <div className="">
        <div className="mt-3 table-card  border-0 card shado mx-3 shadow">
          <div className="p-4">
            <Table
              search={["first_name", "last_name"]}
              sort="id"
              sortDirection={-1}
              data={this.state.tableData}
              fetch={params => {
                this.setState({ query: params });
              }}
              loading={this.state.table_loading}
              fetchError={this.state.tableError}
            />
          </div>
        </div>
      </div>
    );
  }

  fetchMembers = () => {
    this.setState({ table_loading: true });

    let q = {
      // ...this.state.filter,
      ...this.state.query
    };

    let urlParams = Object.entries(q)
      .map(e => e.join("="))
      .join("&");

    fetch(`${window.server}/users/get-users?${urlParams}`, {
      headers: {
        Authorization: `Bearer ${window.user.token}`
      }
    })
      .then(response => response.json())
      .then(response => {
        console.log(response);

        //this.setState({ tableData:{data: response} })

        let data = [];
        response.data.map((d, i) => {
          data.push({
            id: d.id,
            full_name: `${d.first_name} ${d.last_name}`,
            phone_number: d.msisdn.msisdn,
            iD_number: d.details.id_number,
            // identity_type: d.identity_type,
            // sub_county_id: d.sub_county_id,
            // ward_id: d.ward_id,
            kyc_verification: (
              <button className="btn btn-success btn-round pc-3">
                Verified
              </button>
            ),
            // action: (
            //   <div className="d-flex flex-row">
            //     <Link
            //       to={"/member-view/details/" + d.id}
            //       className="btn btn-sm btn-primary px-3 btn-round"
            //     >
            //       View
            //     </Link>
            //   </div>
            // )
          });
        });

        let dts = {};
        dts.data = data;

        this.setState({
          tableData: { ...response, ...dts },
          response,
          table_loading: false
        });
      })
      .catch(d => {
        this.setState({ table_loading: false });
        console.error(d);
      });
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      JSON.stringify({ ...this.state.query, ...this.state.filter }) !==
      JSON.stringify({ ...prevState.query, ...prevState.filter })
    ) {
      let $t = this;

      clearTimeout(this.timeout);
      this.timeout = setTimeout(function() {
        $t.fetchMembers();
      }, 100);
    }
  }
}

export default Users;
