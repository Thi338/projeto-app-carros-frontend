import { useEffect, useState } from "react"
import { useSurveyDataMutate } from "../../../hooks/useSurveyDataMutate"
import { SurveyData } from "../../../interface/SurveyData"
import Select from "react-select";
import './create-vistoria-modal.css';

interface InputProps {
    label: string,
    value: string | number,
    updateValue(value: any ): void
}

interface ModalProps {
    closeModal(): void
}

const InputDate = ({ label, value, updateValue }: InputProps) => {
    return (
        <>
            <label>{label}</label>
            <input type="date" value={value} onChange={e => updateValue(e.target.value)}></input>
        </>
    )

}

const options = [
    { value: "Realizado", label: "REALIZADO"},
    { value: "Reprovado", label: "REPROVADO"}
]

const InputCombo = ({ label, value, updateValue }: InputProps) => {
    return (
    
        <>
            <label>{label}</label><br></br>
            {/*
             
            
            */}
           <select className="select" id="slVistoria" value={value} onChange={e => updateValue(e.target.value)}>
                <option>REALIZADO</option>
                <option>REPROVADO</option>            
            </select>
          
        </>
    )

}


export function CreateVistoriaModal({ closeModal }: ModalProps) {
    const [dataVistoria, setDataVistoria] = useState("");
    const [statusVistoria, setStatusVistoria] = useState("");

    const { mutate, isSuccess } = useSurveyDataMutate();

    const submit = () => {
        const surveyData: SurveyData = {
            dataVistoria,
            statusVistoria
        }
        mutate(surveyData);
    }

    useEffect(() => {
        if (!isSuccess) return
        closeModal()
    }, [isSuccess])

    return (
        <div className="modal-overlay">
            <div className="modal-body">
                <h2>Cadastre uma nova vistoria</h2>
                <form className="input-container">
                    <InputDate label="date" value={dataVistoria} updateValue={setDataVistoria} />
                    <InputCombo label="status" value={statusVistoria} updateValue={setStatusVistoria}/>
                </form>
                <button onClick={submit} className="btn-secondary">Cadastrar</button>
                <button onClick={closeModal} className="btn-close">X</button>
            </div>
        </div>
    )
}