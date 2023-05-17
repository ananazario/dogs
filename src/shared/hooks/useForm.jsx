import React, { useState } from 'react';

const useForm = () => {

    const [value, setValue] = useState('');

    const onChange = ({ target }) => {
        setValue(target.value)
    }

    return {
        value,
        setValue,
        onChange,
    };
}

export default useForm;