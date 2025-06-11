import type {FieldValues} from "react-hook-form";
export default function Result({data}:FieldValues) {
    if (data) {
        const {input1, input2} = data;
        return(
            <div>
                <p>{input1}</p>
                <p>{input2}</p>
            </div>
        )
    }

}