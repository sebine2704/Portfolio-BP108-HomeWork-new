import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const Api = () => {
const [products,setProducts]=useState([])
const [nameValue,setnameValue]=useState("")
const [priceValue,setPriceValue]=useState("")
const [stockValue,setstockValue]=useState("")


const Data=async()=>{
const res=await axios.get("https://northwind.vercel.app/api/products")
setProducts(res.data)
console.log(products);
}
useEffect(()=>{
    Data()
},[])

const Deletebtn= async(id)=>{
 await axios.delete(`https://northwind.vercel.app/api/products/${id}`)
    Data()
}
const AddProd=async(e)=>{
    e.preventDefault();
await axios.post("https://northwind.vercel.app/api/products",{
    name:nameValue,
    unitPrice:priceValue,
    unitsInStock:stockValue
})
 Data()
}
  return (
    <div>
        <form onSubmit={AddProd}>
        <TextField
          error
          id="outlined-succes"
          label="Name"
          value={nameValue}
          onChange={(e)=>setnameValue(e.target.value)}
        />
           <TextField
          error
          id="outlined-succes"
          label="Price"
          value={priceValue}
          onChange={(e)=>setPriceValue(e.target.value)}
        />
          <TextField
          error
          id="outlined-succes"
          label="Stock"
          value={stockValue}
          onChange={(e)=>setstockValue(e.target.value)}
        />
        <button variant="contained" type='submit' >Add</button>
        </form>
       <TableContainer >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell >Product Name</TableCell>
            <TableCell >Unit Price</TableCell>
            <TableCell >Unit in Stock</TableCell>
            <TableCell >Delete Product</TableCell>
            <TableCell >Edit Product</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products
          .sort((a,b)=>a.id-b.id)
          .map((row) => (
            <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell >{row.id}</TableCell>
              <TableCell >{row.name}</TableCell>
              <TableCell >{row.unitPrice}</TableCell>
              <TableCell >{row.unitsInStock}</TableCell>
              <TableCell ><Button variant="contained" color='error' onClick={()=>Deletebtn(row.id)}>Delete</Button></TableCell>
              <TableCell ><Button variant="contained" >Update</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}
export default Api