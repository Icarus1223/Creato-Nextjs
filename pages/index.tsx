import { Button } from "../src/components/Button";
import Icon from "../src/components/Icon";

export default function Home() {
  return (
    <div className="px-2 py-2">
      <h1>H1 heading</h1>
      <h2>H2 heading</h2>
      <h3>H3 heading</h3>
      <h4>H4 heading</h4>
      <h5>H5 heading</h5>
      <h6>H6 heading</h6>
      <br /><br />
      <h1 className="font-light">Light</h1>
      <h1 className="font-normal">Normal</h1>
      <h1 className="font-normalitalic">Normal Italic</h1>
      <h1 className="font-semibold">SemiBold</h1>
      <h1 className="font-bold">Bold</h1>
      <h1 className="font-extrabold">Extra Bold</h1>
      <br /><br />
      <h1>Input</h1>
      <h2>Normal</h2>
      <input type="text" defaultValue="Normal" />
      <h2>Placeholder</h2>
      <input type="text" placeholder="Placeholder" />
      <h2>Disabled with Text</h2>
      <input type="text" defaultValue={"Disabled Normal"} disabled />
      <h2>Disabled with Placeholder</h2>
      <input type="text" placeholder="Disabled Placeholder" disabled />
      <h2>Number Normal</h2>
      <input type="number" defaultValue="123" />
      <h2>Placeholder</h2>
      <input type="number" placeholder="Mumber placeholder" />
      <h2>Disabled with Text</h2>
      <input type="number" defaultValue={"12321"} disabled />
      <h2>Disabled with Placeholder</h2>
      <input type="number" placeholder="Number placeholder" disabled />
      <br /><br />
      <h1>Select</h1>
      <select>
        <option>USD</option>
        <option>AUD - AUSTRALIAN DOLLARS</option>
        <option>SGD</option>
        <option>HKD</option>
        <option>TWD</option>
        <option>JPY</option>
      </select>
      <br /><br />
      <h1>Button</h1>
      <div className="flex">
        <Button.PrimaryButton value="PrimaryButton" rounded="true"></Button.PrimaryButton>
        <Button.PrimaryButton value="PrimaryButton" outline="true"></Button.PrimaryButton>
        <Button.PrimaryButton value={"PrimaryButton"} disabled></Button.PrimaryButton>
        <Button.SecondaryButton value="ScondaryButton"></Button.SecondaryButton>
        <Button.SecondaryButton value="ScondaryButton" outline="true" rounded="true"></Button.SecondaryButton>
        <Button.PrimaryButton value="PrimaryButton" rounded="true"><Icon icon="close" /></Button.PrimaryButton>
        <Button.PrimaryButton value="PrimaryButton" outline="true"><Icon icon="close" /></Button.PrimaryButton>
        <Button.PrimaryButton value={"PrimaryButton"} disabled></Button.PrimaryButton>
        <Button.SecondaryButton value="ScondaryButton"><Icon icon="close" /></Button.SecondaryButton>
        <Button.SecondaryButton value="ScondaryButton" outline="true"><Icon icon="close" /></Button.SecondaryButton>
        <Button.PrimaryButton rounded="true"><Icon icon="close" /></Button.PrimaryButton>
        <Button.PrimaryButton outline="true"><Icon icon="close" /></Button.PrimaryButton>
      </div>
    </div>
  );
}