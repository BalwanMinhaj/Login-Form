import React, { useState } from 'react';
import styles from './Form.module.css';

export default function Input({label, type, ...props}) {
    return (
        <div className={styles.inputContainer}>
            <label>{label}</label>
            <input type={type} {...props} />
        </div>
    )
}
