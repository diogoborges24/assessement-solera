
import{Routes, Route, Navigate} from 'react-router-dom'; 

//approutes pois o reactrouterdom tem um componente routes causa conflito
export const AppRoutes =() =>{

    return(
    <Routes>
        <Route path="/init-page" element={<p>Inital Page</p>} />

        <Route path="*" element={<Navigate to="/init-page"/>} /> 
    </Routes>);
}