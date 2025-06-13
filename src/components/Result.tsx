import type {FieldValues} from "react-hook-form";
import {AMINO_ACID_COLOR_SCHEME as colorScheme, type AminoAcidColorScheme} from "../constants/validation"
export default function Result({data}:FieldValues) {
        const {input1, input2} = data;
        function findDifferencies(position: number) {
                if (input2[position] !== input1[position]) return '#f80000';
                return 'initial';
        }
        return(
            <div style={{marginTop: '20px', display: 'flex', flexWrap: 'wrap'}}>
                    {input1.split('').map((ch: keyof AminoAcidColorScheme, index: number) => (
                        <div key={index} style={{display: 'flex', flexDirection: 'column', marginRight: '2px'}}>
                                <span style={{backgroundColor: colorScheme[ch], borderRadius: '2px', marginBottom: '2px'}}>{input1[index]}</span>
                                <span style={{backgroundColor: findDifferencies(index), borderRadius: '2px', marginBottom: '2px'}}>{input2[index]}</span>
                        </div>
                    ))}
            </div>
        )
}