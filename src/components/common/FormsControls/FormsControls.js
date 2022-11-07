import s from './FormControls.module.css';

const FormControl = ({input, meta, children, ...props}) => {
    const hasError = meta.touched && meta.error;
    const errorClass = hasError && s.error;
    const classes = `${s.formControl} ${errorClass}`
    return (
        <div className={classes}>
            <div>
                {children}
            </div>
            { hasError &&<span>{meta.error}</span> }
        </div>
    );
}

export const Textarea = (props) => {
    const {input, meta, ...restprops} = props;
    return <FormControl {...props}><textarea {...input} {...restprops}/></FormControl>
}

export const Input = (props) => {
    const {input, meta, ...restprops} = props;
    return <FormControl {...props}><input {...input} {...restprops}/></FormControl>
}

// export const Input = ({input, meta, ...props}) => {
//     const hasError = meta.touched && meta.error;
//     const errorClass = hasError && s.error;
//     const classes = `${s.formControl} ${errorClass}`
//     return (
//         <div className={classes}>
//             <div>
//                 <input {...input} {...props}/>
//             </div>
//             { hasError &&<span>{meta.error}</span> }
//         </div>
//     );
// }