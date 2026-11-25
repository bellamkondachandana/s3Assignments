import React, { useState } from "react";

function App() {

    const [consumerId, setConsumerId] = useState("");
    const [consumerName, setConsumerName] = useState("");
    const [currentReading, setCurrentReading] = useState("");
    const [previousReading, setPreviousReading] = useState("");

    const [bill, setBill] = useState(null);

    const calculateBill = () => {

        let units = Number(currentReading) - Number(previousReading);

        if (
            consumerId === "" ||
            consumerName === "" ||
            currentReading === "" ||
            previousReading === ""
        ) {
            alert("Please enter all details");
            return;
        }

        if (units < 0) {
            alert("Current reading cannot be less than previous reading");
            return;
        }

        let totalBill = units * 5;

        setBill({
            consumerId,
            consumerName,
            currentReading,
            previousReading,
            units,
            totalBill
        });
    };

    return (
        <div style={{ textAlign: "center", margin: "30px" }}>

            <h1>Electricity Bill Calculator</h1>

            <input
                type="number"
                placeholder="Consumer ID"
                value={consumerId}
                onChange={(e) => setConsumerId(e.target.value)}
            />
            <br /><br />

            <input
                type="text"
                placeholder="Consumer Name"
                value={consumerName}
                onChange={(e) => setConsumerName(e.target.value)}
            />
            <br /><br />

            <input
                type="number"
                placeholder="Current Reading"
                value={currentReading}
                onChange={(e) => setCurrentReading(e.target.value)}
            />
            <br /><br />

            <input
                type="number"
                placeholder="Previous Reading"
                value={previousReading}
                onChange={(e) => setPreviousReading(e.target.value)}
            />
            <br /><br />

            <button onClick={calculateBill}>
                Calculate Bill
            </button>

            {bill && (
                <div>
                    <h2>Electricity Bill Details</h2>

                    <h3>Consumer ID: {bill.consumerId}</h3>
                    <h3>Consumer Name: {bill.consumerName}</h3>
                    <h3>Current Reading: {bill.currentReading}</h3>
                    <h3>Previous Reading: {bill.previousReading}</h3>
                    <h3>Units: {bill.units}</h3>
                    <h3>Total Bill: ₹{bill.totalBill}</h3>
                </div>
            )}

        </div>
    );
}

export default App;
