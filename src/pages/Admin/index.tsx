import React, { Suspense } from 'react';
import { Outlet } from "react-router-dom";
import { AdminNav } from "pages/Admin/components/AdminNav";
import styles from "./index.module.scss"

const Admin = () => {
  return (
    <div className={ `d-flex flex-fill p-20 ${styles.container}` }>
      <AdminNav/>
      <div className="d-flex flex-column flex-fill">
        <Suspense>
          <Outlet/>
        </Suspense>
      </div>
    </div>
  );
};

export default Admin;