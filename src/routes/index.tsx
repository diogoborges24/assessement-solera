
import{Routes, Route, Navigate} from 'react-router-dom'; 
import Button from '@mui/material/Button';

//approutes pois o reactrouterdom tem um componente routes causa conflito
export const AppRoutes =() =>{

    return(
    <Routes>
        <Route path="/init-page" element={<Button>teste</Button>} />

        <Route path="*" element={<Navigate to="/init-page"/>} /> 
    </Routes>);
}