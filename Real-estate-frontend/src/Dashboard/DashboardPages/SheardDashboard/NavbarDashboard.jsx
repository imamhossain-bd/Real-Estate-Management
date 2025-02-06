import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { DownOutlined, SettingOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd'; // make sure to import the FiMenu icon

const NavbarDashboard = () => {
    const [open, setOpen] = useState(false); // Define the state for toggling the menu

    const items = [
        {
          key: '1',
          label: 'My Account',
          disabled: true,
        },
        {
          type: 'divider',
        },
        {
          key: '2',
          label: 'Profile',
          extra: '⌘P',
        },
        {
          key: '3',
          label: 'Billing',
          extra: '⌘B',
        },
        {
          key: '4',
          label: 'Settings',
          icon: <SettingOutlined />,
          extra: '⌘S',
        },
      ];

    return (
        <div>
            <div className='flex justify-between py-3 px-8 shadow-xl items-center w-[100%]'>
                <div className="">
                    <div className="flex justify-between items-center ">
                        <button className=" text-gray-700" onClick={() => setOpen(!open)}>
                            <FontAwesomeIcon icon={faBars} size='2x'/>
                        </button>
                    </div>
                </div>
                <div className='ml-10'>
                    <input type="text" placeholder="Search..." className="border outline-none px-3 py-2 w-72 rounded-lg " />
                </div>
                <div className=''>
                <Dropdown menu={{ items, }} placement="bottomLeft" className=''
                arrow><a onClick={(e) => e.preventDefault()}><Space> <FontAwesomeIcon icon={faCircleUser} className='text-3xl mr-[3.8px]' /></Space></a></Dropdown>
                </div>
            </div>
        </div>
    );
};

export default NavbarDashboard;
