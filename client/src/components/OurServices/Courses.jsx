// Importa useEffect si aún no lo has hecho
import React, { useEffect } from 'react';
import CourseCard from './CourseCard';
import { useSelector } from 'react-redux';

const Courses = () => {

    const courses = useSelector((state)=>state?.courses)
    console.log("CORUSESDASDSDAWDDAAAFSDSDASDDS",courses);

    return (
        <div className="row d-flex justify-content-center align-items-center bg-primary">
            {courses?.map(({courseName, image, originalPrice, fridayPrice, includes, requirements, payment, theoricSchedule, practiceSchedule}) => (
                <CourseCard
                courseName={courseName}
                image={image}
                originalPrice={originalPrice}
                fridayPrice={fridayPrice}
                includes={includes}
                requirements={requirements}
                payment={payment}
                theoricSchedule={theoricSchedule}
                practiceSchedule={practiceSchedule}
                />
            ))}
        </div>
    );
};

export default Courses;
