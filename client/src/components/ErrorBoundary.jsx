import React from 'react'
class ErrorBoundary extends React.Component {
    constructor(props) {
       super(props);
       this.state = { hasError: false };
    }
   
    static getDerivedStateFromError(error) {
       // Actualiza el estado para que la próxima renderización muestre el componente de reserva
       /* alert(error) */
       return { hasError: true };
    }
   
    componentDidCatch(error, info) {
       // Puede enviar el error a un servicio de informes o simplemente imprimirlo en la consola
       console.log(error, info);
       alert(error, info)
    }
   
    render() {
       if (this.state.hasError) {
         // Puedes mostrar cualquier componente de reserva que desees
         return <h1>Something went wrong.</h1>;
       }
   
       return this.props.children; 
    }
   }

   export default ErrorBoundary;