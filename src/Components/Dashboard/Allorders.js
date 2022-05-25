import React from 'react';

const Allorders = ({order,index}) => {
        const{customerName,customer,product,orders,price,address}=order
    return (
        <div>
            <tr>
                <th>{index+1}</th>
                <th>{customerName}</th>
                <th>{customer}</th>
                <th>{product}</th>
                <th>{price}</th>
                <th>{orders}</th>
                <th>{address}</th>
                
            </tr>
        </div>
    );
};

export default Allorders;