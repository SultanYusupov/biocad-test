import type {FieldValues} from "react-hook-form";
import {AMINO_ACID_COLOR_SCHEME as colorScheme, type AminoAcidColorScheme} from "../constants/validation"
export default function Result({data}:FieldValues) {
        const {input1, input2} = data;
        return(
            <div>
                <p>
                    {input1.split('').map((ch: keyof AminoAcidColorScheme, index: number) => {
                        return <span key={index} style={{backgroundColor: colorScheme[ch], borderRadius: '2px'}}>{ch}</span>
                    })}
                </p>
                <p>
                    {input2.split('').map((ch: keyof AminoAcidColorScheme, index: number) => {
                        return <span key={index} style={{backgroundColor: 'initial'}}>{ch}</span>
                    })}
                </p>
            </div>
        )
}