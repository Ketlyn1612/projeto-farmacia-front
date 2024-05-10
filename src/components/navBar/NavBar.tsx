import { Link, useNavigate } from 'react-router-dom'
import React from 'react'


function Navbar() {
 
  

  return (
    <>
     <div className='w-full bg-indigo-900 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
            <div className='text-2xl font-bold uppercase'>Drogaria Betafarma</div>

            <div className='flex gap-4'>
              <Link to='/login' className='hover:underline'>Serviço gratuito </Link>
              <Link to='/home' className='hover:underline'>Aferição de pressão</Link>
              <div className='hover:underline'>Até 10* sem juros</div>
              <div className='hover:underline'>Entrega grátis</div>
              <div className='hover:underline'>Oferta do mês</div>
              <div className='hover:underline'>Lojas</div>

            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar