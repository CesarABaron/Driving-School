// Importa useEffect si aún no lo has hecho
import React, { useEffect } from 'react';
import ProcedureCard from './ProcedureCard';
import { useSelector } from 'react-redux';

const Procedures = () => {

    const procedures = useSelector((state)=>state?.procedures)

    return (
        <div className="row d-flex justify-content-center align-items-center bg-primary">
            {procedures?.map(({id, name, price, description, includes, requirements, payment, image}) => (
                <ProcedureCard
                name={name}
                id={id}
                price={price}
                description={description}
                includes={includes}
                requirements={requirements}
                payment={payment}
                image={image}
                />
            ))}
        </div>
    );
};

export default Procedures;
