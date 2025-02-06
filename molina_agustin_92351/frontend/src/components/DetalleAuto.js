import { useState } from "react";
import { useNavigate } from "react-router-dom";

const DetalleAuto = () => {
    const [formData, setFormData] = useState({
        fabricante: "",
        modelo: "",
        anio: "",
        categoria: ""
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validación de campos requeridos
        if (!formData.fabricante || !formData.modelo || !formData.anio || !formData.categoria) {
            alert("Todos los campos son obligatorios");
            return;
        }

        try {
            const response = await fetch("http://localhost:3001/autos", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });

            if (!response.ok) throw new Error("Error al agregar auto");

            alert("Auto agregado con éxito");
            navigate("/autos"); // Vuelve al listado de autos
        } catch (error) {
            console.error(error);
            alert("Error al agregar auto");
        }
    };

    return (
        <div>
            <h1>Agregar Nuevo Auto</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="fabricante" placeholder="Fabricante" value={formData.fabricante} onChange={handleChange} required />
                <input type="text" name="modelo" placeholder="Modelo" value={formData.modelo} onChange={handleChange} required />
                <input type="number" name="anio" placeholder="Año" value={formData.anio} onChange={handleChange} required />
                <input type="text" name="categoria" placeholder="Categoría" value={formData.categoria} onChange={handleChange} required />
                <button type="submit">Guardar</button>
            </form>
        </div>
    );
};

export default DetalleAuto;
