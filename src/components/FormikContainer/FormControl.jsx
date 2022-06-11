import Input from "../Tool/Input";
import Textarea from "../Tool/Textarea";
import Select from "../Tool/Select";
import Radio from "../Tool/Radio";
import Checkbox from "../Tool/checkbox";
import Date from "../Tool/Date";
import ChakraInput from "../Tool/ChakraInput";

function FormControl({ control, ...rest }) {
  switch (control) {
    case "text":
      return <Input {...rest} />;
    case "textarea":
      return <Textarea {...rest} />;
    case "select":
      return <Select {...rest} />;
    case "radio":
      return <Radio {...rest} />;
    case "checkbox":
      return <Checkbox {...rest} />;
    case "date":
      return <Date {...rest} />;
    case "chakraInput":
      return <ChakraInput {...rest} />;
    default:
      return null;
  }
}

export default FormControl;
