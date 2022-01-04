import PropTypes from "prop-types";
import Input from "../Form/input";
import Button from "../Button";
import { useState } from "react";

const PersonalInformation = ({ handleSubmit }) => {
    const [names, setNames] = useState('');
    const [lastname, setLastName] = useState('')
    const [address, setAddress] = useState('')
    const [mail, setMail] = useState('')

    const canMakeReservation = () => {
        if (names == '') return false;
        if (lastname == '') return false;
        if (address == '') return false;
        if (mail == '') return false;
        return true;
    }

    return (
        <div>
            <Input placeholder="Nombres" onChange={(e) => { setNames(e.target.value) }} value={names}/>
            <Input placeholder="Apellidos" onChange={(e) => { setLastName(e.target.value) }} value={lastname}/>
            <Input placeholder="Dirección" onChange={(e) => { setAddress(e.target.value) }} value={address}/>
            <Input placeholder="Correo electrónico" onChange={(e) => { setMail(e.target.value) }} value={mail}/>
            <div className="m-top-5">
                <Button
                    label="Reservar"
                    state={(canMakeReservation()) ? 'success' : 'disabled'}
                    handleClick={handleSubmit}
                />
            </div>

        </div>
    )
}

PersonalInformation.propTypes = {
    handleSubmit: PropTypes.func
}

export default PersonalInformation;