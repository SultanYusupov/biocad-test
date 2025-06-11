import {ALLOWED_CHARACTERS_REGEX} from "../constants/validation.ts";

export const useValidation = () => ({
    input1: {
        required: "Поле обязательно для заполнения",
        pattern: {
            value: ALLOWED_CHARACTERS_REGEX,
            message: 'Недопустимые символы'
        },
    },
    input2: {
        required: "Поле обязательно для заполнения",
        pattern: {
            value: ALLOWED_CHARACTERS_REGEX,
            message: 'Недопустимые символы'
        },
    },
});