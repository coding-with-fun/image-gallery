import React from "react";

const Body = () => {
    const items = [];

    for (var i = 0; i < 20; i = i + 3) {
        const itemsArr = [];
        for (var j = i; j < i + 3; j++) {
            itemsArr.push(<span>{j}</span>);
        }
        items.push(<div>{itemsArr}</div>);
    }

    return items;
};

export default Body;
