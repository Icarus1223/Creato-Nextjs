import Button from "../src/components/Button";

export default function Home() {
  return (
    <div className="px-2 py-2">
      <h1 className="text-4xl">Colors</h1>
      <h1 className="text-2xl">Neutral</h1>
      <div className="flex">
        <div className="w-[130px] h-[50px] bg-neutral-50">50</div>
        <div className="w-[130px] h-[50px] bg-neutral-100">100</div>
        <div className="w-[130px] h-[50px] bg-neutral-200">200</div>
        <div className="w-[130px] h-[50px] bg-neutral-300">300</div>
        <div className="w-[130px] h-[50px] bg-neutral-400">400</div>
        <div className="w-[130px] h-[50px] bg-neutral-500">500</div>
        <div className="w-[130px] h-[50px] bg-neutral-600">600</div>
        <div className="w-[130px] h-[50px] bg-neutral-700">700</div>
        <div className="w-[130px] h-[50px] bg-neutral-800">800</div>
        <div className="w-[130px] h-[50px] bg-neutral-900">900</div>
      </div>
      <h1 className="text-2xl">Primary</h1>
      <div className="flex">
        <div className="w-[130px] h-[50px] bg-primary-50">50</div>
        <div className="w-[130px] h-[50px] bg-primary-100">100</div>
        <div className="w-[130px] h-[50px] bg-primary-200">200</div>
        <div className="w-[130px] h-[50px] bg-primary-300">300</div>
        <div className="w-[130px] h-[50px] bg-primary-400">400</div>
        <div className="w-[130px] h-[50px] bg-primary-500">500</div>
        <div className="w-[130px] h-[50px] bg-primary-600">600</div>
        <div className="w-[130px] h-[50px] bg-primary-700">700</div>
        <div className="w-[130px] h-[50px] bg-primary-800">800</div>
        <div className="w-[130px] h-[50px] bg-primary-900">900</div>
      </div>
      <h1 className="text-2xl">Secondary</h1>
      <div className="flex">
        <div className="w-[130px] h-[50px] bg-secondary-50">50</div>
        <div className="w-[130px] h-[50px] bg-secondary-100">100</div>
        <div className="w-[130px] h-[50px] bg-secondary-200">200</div>
        <div className="w-[130px] h-[50px] bg-secondary-300">300</div>
        <div className="w-[130px] h-[50px] bg-secondary-400">400</div>
        <div className="w-[130px] h-[50px] bg-secondary-500">500</div>
        <div className="w-[130px] h-[50px] bg-secondary-600">600</div>
        <div className="w-[130px] h-[50px] bg-secondary-700">700</div>
        <div className="w-[130px] h-[50px] bg-secondary-800">800</div>
        <div className="w-[130px] h-[50px] bg-secondary-900">900</div>
      </div>
      <h1 className="text-2xl">Success</h1>
      <div className="flex">
        <div className="w-[130px] h-[50px] bg-success-50">50</div>
        <div className="w-[130px] h-[50px] bg-success-100">100</div>
        <div className="w-[130px] h-[50px] bg-success-200">200</div>
        <div className="w-[130px] h-[50px] bg-success-300">300</div>
        <div className="w-[130px] h-[50px] bg-success-400">400</div>
        <div className="w-[130px] h-[50px] bg-success-500">500</div>
        <div className="w-[130px] h-[50px] bg-success-600">600</div>
        <div className="w-[130px] h-[50px] bg-success-700">700</div>
        <div className="w-[130px] h-[50px] bg-success-800">800</div>
        <div className="w-[130px] h-[50px] bg-success-900">900</div>
      </div>
      <h1 className="text-2xl">Error</h1>
      <div className="flex">
        <div className="w-[130px] h-[50px] bg-error-50">50</div>
        <div className="w-[130px] h-[50px] bg-error-100">100</div>
        <div className="w-[130px] h-[50px] bg-error-200">200</div>
        <div className="w-[130px] h-[50px] bg-error-300">300</div>
        <div className="w-[130px] h-[50px] bg-error-400">400</div>
        <div className="w-[130px] h-[50px] bg-error-500">500</div>
        <div className="w-[130px] h-[50px] bg-error-600">600</div>
        <div className="w-[130px] h-[50px] bg-error-700">700</div>
        <div className="w-[130px] h-[50px] bg-error-800">800</div>
        <div className="w-[130px] h-[50px] bg-error-900">900</div>
      </div>
      <br />
      <h1 className="text-4xl">Buttons</h1>
      <h2 className="text-2xl">Primary</h2>
      <div className="flex">
        <Button
          color="primary"
          text="Primary Rounded Fill"
          rounded="rounded"
          handleClick={() => { console.log("Primary Rounded Fill") }}
        />
        <Button
          color="primary"
          text="Primary Pill Fill"
          rounded="pill"
          handleClick={() => { console.log("Primary Pill Fill") }}
        />
        <Button
          color="primary"
          text="Primary Rounded Outline"
          rounded="rounded"
          outline
          handleClick={() => { console.log("Primary Rounded Outline") }}
        />
        <Button
          color="primary"
          text="Primary Pill Outline"
          rounded="pill"
          outline
          handleClick={() => { console.log("Primary Rounded Fill") }}
        />
        <Button
          text="Disable Rouned Fill"
          rounded="rounded"
          disable={true}
          handleClick={() => { console.log("Primary Rounded Fill") }}
        />
        <Button
          text="Disable Pill Outline"
          rounded="pill"
          disable
        />
      </div>
      <h2 className="text-2xl">Secondary</h2>
      <div className="flex">
        <Button
          color="secondary"
          text="Secondary Rounded Fill"
          rounded="rounded"
        />
        <Button
          color="secondary"
          text="Secondary Pill Fill"
          rounded="pill"
        />
        <Button
          color="secondary"
          text="Secondary Rounded Fill"
          rounded="rounded"
          outline
        />
        <Button
          color="secondary"
          text="Secondary Pill Outline"
          rounded="pill"
          outline
        />
        <Button
          color="secondary"
          rounded="pill"
          outline
          icon="close"
        />
        <Button
          text="primary"
          color="secondary"
          rounded="pill"
          outline
          icon="close"
        />
      </div>
    </div>
  );
}