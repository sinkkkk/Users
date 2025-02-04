import { Menu } from "antd"
import React from "react"
import Image from "next/image"
import { MailOutlined, SettingOutlined, QuestionOutlined, BellOutlined, InfoCircleOutlined, UserOutlined } from "@ant-design/icons"

const { SubMenu } = Menu

class NavbarAdmin extends React.Component {
  state = {
    theme: "dark",
    current: "mail"
  };

  handleClick = e => {
    console.log("click ", e)
    this.setState({ current: e.key })
  };

  changeTheme = value => {
    this.setState({
      theme: value ? "dark" : "light"
    })
  };

  render () {
    return (
      <>
        <Menu theme={this.state.theme} onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
          <Menu.Item key="icon"><Image src='/favicon.ico' alt="Placeholder Logo" width="25" height="25"></Image>
            <a href="/"/>
          </Menu.Item>
          <Menu.Item key="mail" icon={<MailOutlined />}>
            Empty
          </Menu.Item>
          <SubMenu key="SubMenu" icon={<SettingOutlined />} title="Manage - Submenu">
            <Menu.ItemGroup>
              <Menu.Item key="option:1">Manage Schools
                <a href="/manage/School"/>
              </Menu.Item>
              <Menu.Item key="option:2">Manage Students
                <a href="/manage/Student"/>
              </Menu.Item>
              <Menu.Item key="option:3">Manage Classes
                <a href="/manage/Class"/>
              </Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
          <Menu.Item icon={<QuestionOutlined />}>
            Placeholder
          </Menu.Item>
          <Menu.Item icon={<QuestionOutlined />}>
            Placeholder
          </Menu.Item>
          <Menu.Item icon={<QuestionOutlined />}>
            Placeholder
          </Menu.Item>
          <Menu.Item icon={<InfoCircleOutlined />}style={{ marginLeft: "auto" }}>
            Information
          </Menu.Item>
          <Menu.Item icon={<BellOutlined />}>
            Notifications
          </Menu.Item>
          <Menu.Item icon={<UserOutlined />}>
            Profile
          </Menu.Item>
        </Menu>
      </>
    )
  }
}

export default NavbarAdmin
