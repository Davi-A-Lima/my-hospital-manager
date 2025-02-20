import React, { useEffect, useState } from 'react';
   import api from '../services/api';

   function Compras() {
     const [compras, setCompras] = useState([]);

     useEffect(() => {
       const fetchData = async () => {
         try {
           const response = await api.get('/compras');
           setCompras(response.data);
         } catch (error) {
           console.error('Erro ao buscar compras:', error);
         }
       };

       fetchData();
     }, []);

     return (
       <div style={{ padding: '20px' }}>
         <h2>Lista de Compras</h2>
         <ul>
           {compras.map(compra => (
             <li key={compra._id}>
               <strong>Fornecedor:</strong> {compra.fornecedor}
               <ul>
                 {compra.itens.map((item, index) => (
                   <li key={index}>{item.nome} ({item.quantidade})</li>
                 ))}
               </ul>
             </li>
           ))}
         </ul>
       </div>
     );
   }

   export default Compras;