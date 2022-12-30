import { Button } from "../src/components/Button";
import { ContainerButton } from "../src/components/ContainerButton";
import { Input } from "../src/components/Input";
import { Avatar } from "../src/components/Avatar";
import SideMenu from "../src/components/SideMenu";
import Chip from "../src/components/Chip";
import { BSKCard } from "../src/components/BSKCard";
import Icon from "../src/components/Icon";
import { useState } from "react";

import image from "../src/assets/test.png"
import image1 from "../src/assets/test1.jpg"
import image2 from "../src/assets/test2.png"

export default function Home() {
  const [tab, setTab] = useState(0)
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
      <h2>TEXT</h2>
      <Input.TextInput value="Text Input" onChange={() => { }}></Input.TextInput>
      <h2>Placeholder</h2>
      <Input.TextInput placeholder="text placeholder"></Input.TextInput>
      <h2>Disabled with Text</h2>
      <Input.TextInput value="Text Input" disabled onChange={() => { }}></Input.TextInput>
      <h2>Disabled with Placeholder</h2>
      <Input.TextInput placeholder="text placeholder" disabled></Input.TextInput>
      <h2>Number Normal</h2>
      <Input.NumberInput value={23} onChange={() => { }}></Input.NumberInput>
      <h2>Placeholder</h2>
      <Input.NumberInput placeholder="Number"></Input.NumberInput>
      <h2>Disabled with Text</h2>
      <Input.NumberInput value={23} disabled onChange={() => { }}></Input.NumberInput>
      <h2>Disabled with Placeholder</h2>
      <Input.NumberInput placeholder="Number" disabled></Input.NumberInput>
      <h2>Password</h2>
      <Input.PasswordInput></Input.PasswordInput>
      <h2>CheckBox</h2>
      <Input.CheckBox onChange={() => { }}></Input.CheckBox>
      <Input.CheckBox checked onChange={() => { }}></Input.CheckBox>
      <h2>Radio</h2>
      <Input.RadioButton onChange={() => { }}></Input.RadioButton>
      <Input.RadioButton checked onChange={() => { }}></Input.RadioButton>
      <h2>Date</h2>
      <Input.DateInput></Input.DateInput>
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
      <select disabled>
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
        <Button.PrimaryButton value={"PrimaryButton"} disabled onClick={() => alert("test")}></Button.PrimaryButton>
        <Button.SecondaryButton disabled value="ScondaryButton"></Button.SecondaryButton>
        <Button.SecondaryButton value="ScondaryButton" outline="true" rounded="true"></Button.SecondaryButton>
        <Button.PrimaryButton value="PrimaryButton" rounded="true"><Icon icon="close" /></Button.PrimaryButton>
        <Button.PrimaryButton value="PrimaryButton" outline="true"><Icon icon="close" /></Button.PrimaryButton>
      </div>
      <h1>Container Button</h1>
      <div className="flex">
        <ContainerButton.PrimaryButton value="Primary Button"></ContainerButton.PrimaryButton>
        <ContainerButton.SecondaryButton value="Secondary Button"></ContainerButton.SecondaryButton>
        <ContainerButton.PrimaryButton disabled value="Primary Button"></ContainerButton.PrimaryButton>
        <ContainerButton.SecondaryButton disabled value="Secondary Button"></ContainerButton.SecondaryButton>
      </div>
      <div className="flex">
        <ContainerButton.PrimaryButton value="Primary Button"><Icon icon="close" /></ContainerButton.PrimaryButton>
        <ContainerButton.SecondaryButton value="Secondary Button"><Icon icon="close" /></ContainerButton.SecondaryButton>
      </div>
      <br /><br />
      <h1>Avatar</h1>
      <h2>CreatorAvatar</h2>
      <div className="flex">
        <Avatar.CreatorAvatar size="sm" src="https://i.pravatar.cc/150?img=3" />
        <Avatar.CreatorAvatar size="md" src="https://i.pravatar.cc/150?img=3" />
        <Avatar.CreatorAvatar size="lg" src="https://i.pravatar.cc/150?img=3" />
        <Avatar.CreatorAvatar size="xl" src="https://i.pravatar.cc/150?img=3" />
      </div>
      <br /><br />
      <h1>SideMenu</h1>
      <div className="w-[500px]">
        <SideMenu
          tab={tab}
          setTab={setTab}
          tabs={[
            { url: "tab1", name: "Tab1" },
            { url: "tab2", name: "Tab2" },
            { url: "tab3", name: "Tab3" },
          ]}
        />
      </div>
      <br /><br />
      <h1>Chip</h1>
      <Chip type="free" value="free" />
      <Chip type="locked" value="Lock" />
      <Chip type="unlocked" value="Unlocked" />
      <Chip type="mine" value="Mine" />
      <br /><br />
      <h1>BSK Card</h1>
      <h2>Home Card</h2>
      <div className="flex">
        <BSKCard.HomeCard
          user={{
            name: 'Benjamin',
            avatar: 'https://i.pravatar.cc/150?img=3',
            profileUrl: '/'
          }}
          thumbnails={[image, image1, image2]}
          isLogin={false}
          locked={true}
          time={20000}
          title="BSK title BSK title BSK titlte BSK title BSK title BSK title BSK title BSK title"
          currency="usd"
          price={10}
          unlockedCnt={2}
        />
        <BSKCard.HomeCard
          user={{
            name: 'Benjamin',
            avatar: 'https://i.pravatar.cc/150?img=3',
            profileUrl: '/'
          }}
          thumbnails={[image, image1, image2]}
          isLogin={false}
          locked={true}
          time={50000}
          title="BSK title BSK title BSK titlte BSK title BSK title BSK title BSK title BSK title"
          unlockedCnt={2}
        />
        <BSKCard.HomeCard
          user={{
            name: 'Benjamin',
            avatar: 'https://i.pravatar.cc/150?img=3',
            profileUrl: '/'
          }}
          thumbnails={[image, image1, image2]}
          isLogin={true}
          locked={true}
          time={3000}
          title="BSK title BSK title BSK titlte BSK title BSK title BSK title BSK title BSK title"
          currency="usd"
          price={10}
          unlockedCnt={2}
        />
        <BSKCard.HomeCard
          user={{
            name: 'Benjamin',
            avatar: 'https://i.pravatar.cc/150?img=3',
            profileUrl: '/'
          }}
          thumbnails={[image, image1, image2]}
          isLogin={true}
          locked={true}
          time={120000}
          title="BSK  title BSK title BSK titlte BSK title BSK title BSK title BSK title BSK title"
          unlockedCnt={2}
        />
        <BSKCard.HomeCard
          user={{
            name: 'Benjamin',
            avatar: 'https://i.pravatar.cc/150?img=3',
            profileUrl: '/'
          }}
          thumbnails={[image, image1, image2]}
          isLogin={true}
          locked={false}
          title="BSK  title BSK title BSK titlte BSK title BSK title BSK title BSK title BSK title"
          currency="aud"
          time={25000}
          price={10}
          unlockedCnt={2}
        />
      </div>
      <h2>Profile Card</h2>
      <div className="flex flex-wrap">
        <BSKCard.ProfileCard
          thumbnails={[image, image1, image2]}
          isLogin={false}
          locked={true}
          time={20000}
          title="BSK title BSK title BSK titlte BSK title BSK title BSK title BSK title BSK title"
          currency="usd"
          price={10}
          unlockedCnt={2}
        />
        <BSKCard.ProfileCard
          thumbnails={[image, image1, image2]}
          isLogin={false}
          locked={true}
          time={50000}
          title="BSK title BSK title BSK titlte BSK title BSK title BSK title BSK title BSK title"
          unlockedCnt={2}
        />
         <BSKCard.ProfileCard
          thumbnails={[image, image1, image2]}
          isLogin={true}
          locked={true}
          time={3000}
          title="BSK title BSK title BSK titlte BSK title BSK title BSK title BSK title BSK title"
          currency="usd"
          price={10}
          unlockedCnt={2}
        />
        <BSKCard.ProfileCard
          thumbnails={[image, image1, image2]}
          isLogin={true}
          locked={true}
          time={120000}
          title="BSK  title BSK title BSK titlte BSK title BSK title BSK title BSK title BSK title"
          unlockedCnt={2}
        />
        <BSKCard.ProfileCard
          thumbnails={[image, image1, image2]}
          isLogin={true}
          locked={false}
          title="BSK  title BSK title BSK titlte BSK title BSK title BSK title BSK title BSK title"
          currency="aud"
          time={25000}
          price={10}
          unlockedCnt={2}
        />
        <BSKCard.ProfileCard
          thumbnails={[image, image1, image2]}
          isLogin={true}
          locked={true}
          isMine={true}
          time={120000}
          title="BSK  title BSK title BSK titlte BSK title BSK title BSK title BSK title BSK title"
          unlockedCnt={2}
        />
        <BSKCard.ProfileCard
          thumbnails={[image, image1, image2]}
          isLogin={true}
          locked={false}
          isMine={true}
          title="BSK  title BSK title BSK titlte BSK title BSK title BSK title BSK title BSK title"
          currency="aud"
          time={25000}
          price={10}
          unlockedCnt={2}
        />
      </div>
    </div>
  );
}