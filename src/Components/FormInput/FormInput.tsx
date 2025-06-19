import style from "./FormInput.module.css";

// So far this is one of the hardest template i made

type InputValue = string | number | boolean | Date | string[] | null;

interface FormInputProps {
    Input: {
        Label: string;
        ID: string;
        Type?: string;
        Value: InputValue;
        OnChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
        Pattern?: string;
        IsRequired?: boolean;
        Options?: { label: string; value: string }[];
        Name?: string;
    }[];
    FeedbackMessage?: {
        type: "error" | "warning" | "success";
        message: string;
    } | null;
    Style?: {
        Rows?: number;
        TextColor?: string;
        BackgroundColor?: string;
        InputTextColor?: string;
        InputBackgroundColor?: string;
        ButtonButtonBackground?: string;
        ButtonTextColor?: string;
    };
    OnSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    SubmitLabel?: string;
}

export const FormInput: React.FC<FormInputProps> = ({ Input, Style, OnSubmit, SubmitLabel, FeedbackMessage }) => (
    <form
        style={{
            color: Style?.TextColor || "inherit",
            backgroundColor: Style?.BackgroundColor || "transparent",
            width: "100%",
        }}
        onSubmit={OnSubmit}
    >
        <div
            className={style.inputs}
            style={{
                gridTemplateColumns: Style?.Rows ? `repeat(${Style.Rows}, 1fr)` : "1fr",
            }}
        >
            {Input.map((item, index) => {
                // Convert non-string values to strings where necessary
                const inputValue =
                    item.Value instanceof Date
                        ? item.Value.toISOString().split("T")[0]
                        : typeof item.Value === "boolean"
                        ? item.Value.toString()
                        : item.Value ?? "";

                return (
                    <div key={index} className={style.input_box}>
                        <label htmlFor={item.ID}>{item.Label}:</label>

                        {item.Type === "select" ? (
                            <select
                                id={item.ID}
                                className={style.input}
                                value={typeof item.Value === "string" ? item.Value : ""}
                                onChange={item.OnChange}
                                required={item.IsRequired}
                            >
                                {item.Options?.map((option, i) => (
                                    <option key={i} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        ) : item.Type === "radio" || item.Type === "checkbox" ? (
                            item.Options?.map((option, i) => (
                                <label key={i} htmlFor={`${item.ID}-${option.value}`}>
                                    <input
                                        id={`${item.ID}-${option.value}`}
                                        type={item.Type}
                                        name={item.Type === "radio" ? item.Name || item.ID : undefined}
                                        value={option.value}
                                        checked={
                                            item.Type === "checkbox"
                                                ? Array.isArray(item.Value) && item.Value.includes(option.value)
                                                : item.Value === option.value
                                        }
                                        onChange={item.OnChange}
                                        required={item.IsRequired}
                                    />
                                    {option.label}
                                </label>
                            ))
                        ) : (
                            <input
                                id={item.ID}
                                type={item.Type || "text"}
                                className={style.input}
                                placeholder={`Enter ${item.Label.toLowerCase()}...`}
                                title={`Enter ${item.Label.toLowerCase()}...`}
                                value={inputValue}
                                onChange={item.OnChange}
                                pattern={item.Pattern}
                                style={{
                                    color: Style?.InputTextColor || "inherit",
                                    backgroundColor: Style?.InputBackgroundColor || "transparent",
                                }}
                                required={item.IsRequired}
                            />
                        )}
                    </div>
                );
            })}
        </div>
        <br/>

        {FeedbackMessage && (
            <>
                <div
                    className={`${style.FeedbackMessage} ${
                        style[`alert_${FeedbackMessage.type === "error" ? "danger" : FeedbackMessage.type}`]
                    }`}
                >
                    {FeedbackMessage.message}
                </div>
                <br />
            </>
        )}

        <div className={style.center}>
            <input className={style.submit} 
            style={{
                backgroundColor: Style?.ButtonButtonBackground || "rgb(20, 152, 247)", 
                color: Style?.ButtonTextColor || "white"
            }} 
            type="submit" value={SubmitLabel || "Submit"} />
        </div>
    </form>
);
