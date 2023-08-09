import React, {useState,useEffect} from 'react';
import { useForm } from 'react-hook-form';

import axios from 'axios';

function AddTrade(props) {
    // const [books, setBooks] = useState([]);
    const [counterparties, setCounterparties] = useState([]);
    const [securities, setSecurities] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/securities/get')
        .then(response => {
          setSecurities(response.data)
          console.log(response.data)
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });

        axios.get('http://localhost:8080/trades/allcounterparty')
        .then(response => {
          setCounterparties(response.data)
          console.log(response.data)
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });

        // axios.get('http://localhost:8080/trades/allbooks')
        // .then(response => {
        //   setBooks(response.data)
        //   console.log(response.data)
        // })
        // .catch(error => {
        //   console.error('Error fetching data:', error);
        // });

    },[]);

    const [formData, setFormData] = useState({
        id: 0,
        bookId: 0,
        counterpartyId: {},
        securityId: {},
        quantity: 0,
        status: '',
        price: 0.0,
        buySell: '',
        tradeDate: '',
        settlementDate: ''
      });
    const {id, bookId, counterpartyId, securityId, quantity, status, price, buySell, tradeDate,settlementDate} = formData;
      const handleInputChange = (name) => (e) =>{
        setFormData({...formData, [name]:e.target.value  })

      };

      const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(formData);

        try{
            const resp = await axios.post('http://localhost:8080/trades/add',{
                id,
                bookId,
                counterpartyId,
                securityId,
                quantity,
                status,
                price,
                buySell,
                tradeDate,
                settlementDate
            });
            console.log('Data Added successfully: ',resp.data);
        }

        catch (err){
            console.log(err);
        }
    };

    return (
        <div className="container-fluid">
        <div className='row login-main'>
        <div className='col-2'></div>
        

        <div className='col-4'>
            <h1>Initiate New Trade</h1>
            <form onSubmit={handleSubmit}>

            <div className="mb-3">
                <label  className="form-label"></label>
                <input type="number" placeholder="Trade Id"  className="form-control" value={id}  onChange={handleInputChange("id")} />
               
            </div>

            <div className="mb-3">
                <label  className="form-label"></label>
                <input type="number" placeholder="Book ID"  className="form-control" value={bookId}  onChange={handleInputChange("bookId")} />
                {/* <select
                name="bookId"
                value={bookId}
                onChange={handleInputChange('bookId')}
                >
                <option value="">Select a Book</option>
                {books.map((book) => (
                    <option key={book.bookId} value={book.bookId}>
                    {book.bookName}
                    </option>
                ))}
                </select> */}
            </div>

            <div className="mb-3">
                {/* <label  className="form-label"></label>
                <input type="number" placeholder="Counterparty ID"  className="form-control" value={counterpartyId}  onChange={handleInputChange("counterpartyId")} /> */}
                <select
                name="counterpartId"
                value={counterpartyId}
                onChange={handleInputChange('counterpartyId')}
                >
                <option value="">Select a counterparty</option>
                {counterparties.map((counterparty) => (
                    <option key={counterparty.counterpartyId} value={counterparty.counterpartyId}>
                    {counterparty.counterpartyName}
                    </option>
                ))}
                </select>
            </div>

            <div className="mb-3">
                {/* <label  className="form-label"></label>
                <input type="number" placeholder="Security ID"  className="form-control" value={securityId}  onChange={handleInputChange("securityId")} /> */}

                <select
                name="securityId"
                value={securityId}
                onChange={handleInputChange('securityId')}
                >
                <option value="">Select a security</option>
                {securities.map((security) => (
                    <option key={security.securityId} value={security.securityId}>
                    {security.issuer} - {security.isin}
                    </option>
                ))}
                </select>
            </div>

            <div className="mb-3">
                <label  className="form-label"></label>
                <input type="number" placeholder="Quantity"  className="form-control" value={quantity}  onChange={handleInputChange("quantity")} />
               
            </div>

            <div className="mb-3">
                <label  className="form-label"></label>
                <input type="text" placeholder="Status"  className="form-control" value={status}  onChange={handleInputChange("status")} />
               
            </div>

            <div className="mb-3">
                <label  className="form-label"></label>
                <input type="number" placeholder="Price"  className="form-control" value={price}  onChange={handleInputChange("price")} />
               
            </div>

            <div className="mb-3">
                <label  className="form-label"></label>
                <input type="text" placeholder="buySell"  className="form-control" value={buySell}  onChange={handleInputChange("buySell")} />
               
            </div>

            <div className="mb-3">
                <label  className="form-label"></label>
                <input type="date" placeholder="Trade Date"  className="form-control" value={tradeDate}  onChange={handleInputChange("tradeDate")} />
               
            </div>

            <div className="mb-3">
                <label  className="form-label"></label>
                <input type="date" placeholder="Settlement Date"  className="form-control" value={settlementDate}  onChange={handleInputChange("settlementDate")} />
               
            </div>

            <div class="d-grid gap-2">
            <button type="submit" class="btn btn-primary login-btn">Add</button>
            </div>
            </form>
            </div>   
        </div>
        </div>
    );
}

export default AddTrade;