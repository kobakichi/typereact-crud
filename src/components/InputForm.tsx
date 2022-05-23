import React, { useState } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";

export const InputForm: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  // チェックボックス用ステート
  const [checkbox, setCheckbox] = useState(false);

  // apiへデータを送信する関数
  const postData = () => {
    console.log(firstName);
    console.log(lastName);
    console.log(checkbox);
  };

  return (
    <>
      <Form className="input-form label">
        <Form.Field>
          <label>First Name</label>
          <input
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label="I agree to the Terms and Conditions"
            onChange={(e) => setCheckbox(!checkbox)}
          />
        </Form.Field>
        <Button onClick={postData} type="submit">
          api送信
        </Button>
      </Form>
    </>
  );
};
