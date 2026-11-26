import React, { useState, useRef } from "react";

const EmployeeInvoice = () => {
  const [invoice, setInvoice] = useState(null);

  const eno = useRef();
  const ename = useRef();
  const salary = useRef();

  const printInvoice = () => {
    let empno = eno.current.value;
    let empname = ename.current.value;
    let sal = Number(salary.current.value);

    let ta, da, hra, pf;

    if (sal < 30000) {
      ta = sal * 7 / 100;
      da = sal * 9 / 100;
      hra = sal * 11 / 100;
      pf = sal * 15 / 100;
    }
    else if (sal >= 30000 && sal < 50000) {
      ta = sal * 12 / 100;
      da = sal * 13 / 100;
      hra = sal * 17 / 100;
      pf = sal * 22 / 100;
    }
    else {
      ta = sal * 17 / 100;
      da = sal * 19 / 100;
      hra = sal * 21 / 100;
      pf = sal * 25 / 100;
    }

    let gross = sal + ta + da + hra;
    let net = gross - pf;

    setInvoice({
      empno,
      empname,
      sal,
      ta,
      da,
      hra,
      pf,
      gross,
      net
    });
  };

  return (
    <div>
      <h1>Employee Invoice Application</h1>

      Employee No:
      <input type="text" ref={eno} />
      <br /><br />

      Employee Name:
      <input type="text" ref={ename} />
      <br /><br />

      Employee Salary:
      <input type="number" ref={salary} />
      <br /><br />

      <button onClick={printInvoice}>Print Invoice</button>

      {invoice && (
        <div>
          <h2>Employee Invoice</h2>

          <p>Employee No is {invoice.empno}</p>
          <p>Employee Name is {invoice.empname}</p>
          <p>Salary is {invoice.sal}</p>
          <p>TA is {invoice.ta}</p>
          <p>DA is {invoice.da}</p>
          <p>HRA is {invoice.hra}</p>
          <p>PF is {invoice.pf}</p>
          <p>Gross Salary is {invoice.gross}</p>
          <h3>Net Salary is {invoice.net}</h3>
        </div>
      )}
    </div>
  );
};

export default EmployeeInvoice;
