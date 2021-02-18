import React from 'react'
import defaultLogo from '@smartb/archetypes-storybook/assets/impactcity-logo-2.png'
import { AccountCircle } from '@material-ui/icons'
import { Menu } from '@smartb/archetypes-ui-layout'

export const MultipleSectionMenu: Menu = {
  label: 'profile',
  key: 'profile',
  icon: <AccountCircle />,
  items: [
    {
      key: 'section 1',
      label: 'section 1',
      icon: (
        <img
          style={{ width: '30px', height: '30px', margin: '0' }}
          src={defaultLogo}
          alt='smart b'
        ></img>
      ),
      items: [
        {
          key: 'dashboard 1',
          label: 'dashboard 1',
          icon: (
            <img
              style={{ width: '60px', height: '60px' }}
              src={defaultLogo}
              alt='smart b'
            ></img>
          )
        },
        {
          key: 'activities 1',
          label: 'activities 1',
          icon: (
            <img
              style={{ width: '60px', height: '60px' }}
              src={defaultLogo}
              alt='smart b'
            ></img>
          )
        },
        {
          key: 'application 1',
          label: 'application 1',
          icon: (
            <img
              style={{ width: '60px', height: '60px' }}
              src={defaultLogo}
              alt='smart b'
            ></img>
          )
        }
      ]
    },
    {
      key: 'section 2',
      label: 'section 2',
      icon: (
        <img
          style={{ width: '30px', height: '30px', margin: '0' }}
          src={defaultLogo}
          alt='smart b'
        ></img>
      ),
      items: [
        {
          key: 'dashboard 2',
          label: 'dashboard 2',
          icon: (
            <img
              style={{ width: '60px', height: '60px' }}
              src={defaultLogo}
              alt='smart b'
            ></img>
          )
        },
        {
          key: 'activities 2',
          label: 'activities 2',
          icon: (
            <img
              style={{ width: '60px', height: '60px' }}
              src={defaultLogo}
              alt='smart b'
            ></img>
          )
        },
        {
          key: 'application 2',
          label: 'application 2',
          icon: (
            <img
              style={{ width: '60px', height: '60px' }}
              src={defaultLogo}
              alt='smart b'
            ></img>
          )
        }
      ]
    },
    {
      key: 'section 3',
      label: 'section 3',
      icon: (
        <img
          style={{ width: '30px', height: '30px', margin: '0' }}
          src={defaultLogo}
          alt='smart b'
        ></img>
      ),
      items: [
        {
          key: 'dashboard 3',
          label: 'dashboard 3',
          icon: (
            <img
              style={{ width: '60px', height: '60px' }}
              src={defaultLogo}
              alt='smart b'
            ></img>
          )
        },
        {
          key: 'activities 3',
          label: 'activities 3',
          icon: (
            <img
              style={{ width: '60px', height: '60px' }}
              src={defaultLogo}
              alt='smart b'
            ></img>
          )
        },
        {
          key: 'application 3',
          label: 'application 3',
          icon: (
            <img
              style={{ width: '60px', height: '60px' }}
              src={defaultLogo}
              alt='smart b'
            ></img>
          )
        }
      ]
    }
  ]
}

export const MultipleSectionMenuWithoutIcon: Menu = {
  label: 'profile',
  key: 'profile',
  icon: <AccountCircle />,
  items: [
    {
      key: 'section 1',
      label: 'section 1',
      items: [
        {
          key: 'dashboard 1',
          label: 'dashboard 1',
          icon: (
            <img
              style={{ width: '60px', height: '60px' }}
              src={defaultLogo}
              alt='smart b'
            ></img>
          )
        },
        {
          key: 'activities 1',
          label: 'activities 1',
          icon: (
            <img
              style={{ width: '60px', height: '60px' }}
              src={defaultLogo}
              alt='smart b'
            ></img>
          )
        },
        {
          key: 'application 1',
          label: 'application 1',
          icon: (
            <img
              style={{ width: '60px', height: '60px' }}
              src={defaultLogo}
              alt='smart b'
            ></img>
          )
        }
      ]
    },
    {
      key: 'section 2',
      label: 'section 2',
      items: [
        {
          key: 'dashboard 2',
          label: 'dashboard 2',
          icon: (
            <img
              style={{ width: '60px', height: '60px' }}
              src={defaultLogo}
              alt='smart b'
            ></img>
          )
        },
        {
          key: 'activities 2',
          label: 'activities 2',
          icon: (
            <img
              style={{ width: '60px', height: '60px' }}
              src={defaultLogo}
              alt='smart b'
            ></img>
          )
        },
        {
          key: 'application 2',
          label: 'application 2',
          icon: (
            <img
              style={{ width: '60px', height: '60px' }}
              src={defaultLogo}
              alt='smart b'
            ></img>
          )
        }
      ]
    },
    {
      key: 'section 3',
      label: 'section 3',
      items: [
        {
          key: 'dashboard 3',
          label: 'dashboard 3',
          icon: (
            <img
              style={{ width: '60px', height: '60px' }}
              src={defaultLogo}
              alt='smart b'
            ></img>
          )
        },
        {
          key: 'activities 3',
          label: 'activities 3',
          icon: (
            <img
              style={{ width: '60px', height: '60px' }}
              src={defaultLogo}
              alt='smart b'
            ></img>
          )
        },
        {
          key: 'application 3',
          label: 'application 3',
          icon: (
            <img
              style={{ width: '60px', height: '60px' }}
              src={defaultLogo}
              alt='smart b'
            ></img>
          )
        }
      ]
    }
  ]
}

export const OneSectionMenu: Menu = {
  label: 'profile',
  key: 'profile',
  icon: <AccountCircle />,
  items: [
    {
      key: 'section 1',
      label: 'section 1',
      icon: (
        <img
          style={{ width: '30px', height: '30px', margin: '0' }}
          src={defaultLogo}
          alt='smart b'
        ></img>
      ),
      items: [
        {
          key: 'dashboard 1',
          label: 'dashboard 1',
          icon: (
            <img
              style={{ width: '60px', height: '60px' }}
              src={defaultLogo}
              alt='smart b'
            ></img>
          )
        },
        {
          key: 'activities 1',
          label: 'activities 1',
          icon: (
            <img
              style={{ width: '60px', height: '60px' }}
              src={defaultLogo}
              alt='smart b'
            ></img>
          )
        },
        {
          key: 'application 1',
          label: 'application 1',
          icon: (
            <img
              style={{ width: '60px', height: '60px' }}
              src={defaultLogo}
              alt='smart b'
            ></img>
          )
        }
      ]
    }
  ]
}

export const OneSectionMenuFull: Menu = {
  label: 'profile',
  key: 'profile',
  icon: <AccountCircle />,
  items: [
    {
      key: 'section 1',
      label: 'section 1',
      icon: (
        <img
          style={{ width: '30px', height: '30px', margin: '0' }}
          src={defaultLogo}
          alt='smart b'
        ></img>
      ),
      items: [
        {
          key: 'dashboard 1',
          label: 'dashboard 1',
          icon: (
            <img
              style={{ width: '60px', height: '60px' }}
              src={defaultLogo}
              alt='smart b'
            ></img>
          )
        },
        {
          key: 'activities 1',
          label: 'activities 1',
          icon: (
            <img
              style={{ width: '60px', height: '60px' }}
              src={defaultLogo}
              alt='smart b'
            ></img>
          )
        },
        {
          key: 'application 1.1',
          label: 'application 1.1',
          icon: (
            <img
              style={{ width: '60px', height: '60px' }}
              src={defaultLogo}
              alt='smart b'
            ></img>
          )
        },
        {
          key: 'application 1.2',
          label: 'application 1.2',
          icon: (
            <img
              style={{ width: '60px', height: '60px' }}
              src={defaultLogo}
              alt='smart b'
            ></img>
          )
        },
        {
          key: 'application 1.3',
          label: 'application 1.3',
          icon: (
            <img
              style={{ width: '60px', height: '60px' }}
              src={defaultLogo}
              alt='smart b'
            ></img>
          )
        },
        {
          key: 'application 1.4',
          label: 'application 1.4',
          icon: (
            <img
              style={{ width: '60px', height: '60px' }}
              src={defaultLogo}
              alt='smart b'
            ></img>
          )
        },
        {
          key: 'application 1.5',
          label: 'application 1.5',
          icon: (
            <img
              style={{ width: '60px', height: '60px' }}
              src={defaultLogo}
              alt='smart b'
            ></img>
          )
        },
        {
          key: 'application 1.6',
          label: 'application 1.6',
          icon: (
            <img
              style={{ width: '60px', height: '60px' }}
              src={defaultLogo}
              alt='smart b'
            ></img>
          )
        },
        {
          key: 'application 1.7',
          label: 'application 1.7',
          icon: (
            <img
              style={{ width: '60px', height: '60px' }}
              src={defaultLogo}
              alt='smart b'
            ></img>
          )
        },
        {
          key: 'application 1.8',
          label: 'application 1.8',
          icon: (
            <img
              style={{ width: '60px', height: '60px' }}
              src={defaultLogo}
              alt='smart b'
            ></img>
          )
        },
        {
          key: 'application 1.9',
          label: 'application 1.9',
          icon: (
            <img
              style={{ width: '60px', height: '60px' }}
              src={defaultLogo}
              alt='smart b'
            ></img>
          )
        },
        {
          key: 'application 1.10',
          label: 'application 1.10',
          icon: (
            <img
              style={{ width: '60px', height: '60px' }}
              src={defaultLogo}
              alt='smart b'
            ></img>
          )
        },
        {
          key: 'application 1.11',
          label: 'application 1.11',
          icon: (
            <img
              style={{ width: '60px', height: '60px' }}
              src={defaultLogo}
              alt='smart b'
            ></img>
          )
        },
        {
          key: 'application 1.12',
          label: 'application 1.12',
          icon: (
            <img
              style={{ width: '60px', height: '60px' }}
              src={defaultLogo}
              alt='smart b'
            ></img>
          )
        },
        {
          key: 'application 1.13',
          label: 'application 1.13',
          icon: (
            <img
              style={{ width: '60px', height: '60px' }}
              src={defaultLogo}
              alt='smart b'
            ></img>
          )
        },
        {
          key: 'application 1.14',
          label: 'application 1.14',
          icon: (
            <img
              style={{ width: '60px', height: '60px' }}
              src={defaultLogo}
              alt='smart b'
            ></img>
          )
        },
        {
          key: 'application 1.15',
          label: 'application 1.15',
          icon: (
            <img
              style={{ width: '60px', height: '60px' }}
              src={defaultLogo}
              alt='smart b'
            ></img>
          )
        },
        {
          key: 'application 1.16',
          label: 'application 1.16',
          icon: (
            <img
              style={{ width: '60px', height: '60px' }}
              src={defaultLogo}
              alt='smart b'
            ></img>
          )
        },
        {
          key: 'application 1.17',
          label: 'application 1.17',
          icon: (
            <img
              style={{ width: '60px', height: '60px' }}
              src={defaultLogo}
              alt='smart b'
            ></img>
          )
        },
        {
          key: 'application 1.18',
          label: 'application 1.19',
          icon: (
            <img
              style={{ width: '60px', height: '60px' }}
              src={defaultLogo}
              alt='smart b'
            ></img>
          )
        }
      ]
    }
  ]
}

export const MultipleSectionMenuFull: Menu = {
  label: 'profile',
  key: 'profile',
  icon: <AccountCircle />,
  items: [
    {
      key: 'section 1',
      label: 'section 1',
      icon: (
        <img
          style={{ width: '30px', height: '30px', margin: '0' }}
          src={defaultLogo}
          alt='smart b'
        ></img>
      ),
      items: [
        {
          key: 'dashboard 1',
          label: 'dashboard 1',
          icon: (
            <img
              style={{ width: '60px', height: '60px' }}
              src={defaultLogo}
              alt='smart b'
            ></img>
          )
        },
        {
          key: 'activities 1',
          label: 'activities 1',
          icon: (
            <img
              style={{ width: '60px', height: '60px' }}
              src={defaultLogo}
              alt='smart b'
            ></img>
          )
        },
        {
          key: 'application 1.1',
          label: 'application 1.1',
          icon: (
            <img
              style={{ width: '60px', height: '60px' }}
              src={defaultLogo}
              alt='smart b'
            ></img>
          )
        },
        {
          key: 'application 1.2',
          label: 'application 1.2',
          icon: (
            <img
              style={{ width: '60px', height: '60px' }}
              src={defaultLogo}
              alt='smart b'
            ></img>
          )
        },
        {
          key: 'application 1.3',
          label: 'application 1.3',
          icon: (
            <img
              style={{ width: '60px', height: '60px' }}
              src={defaultLogo}
              alt='smart b'
            ></img>
          )
        },
        {
          key: 'application 1.4',
          label: 'application 1.4',
          icon: (
            <img
              style={{ width: '60px', height: '60px' }}
              src={defaultLogo}
              alt='smart b'
            ></img>
          )
        },
        {
          key: 'application 1.5',
          label: 'application 1.5',
          icon: (
            <img
              style={{ width: '60px', height: '60px' }}
              src={defaultLogo}
              alt='smart b'
            ></img>
          )
        },
        {
          key: 'application 1.6',
          label: 'application 1.6',
          icon: (
            <img
              style={{ width: '60px', height: '60px' }}
              src={defaultLogo}
              alt='smart b'
            ></img>
          )
        },
        {
          key: 'application 1.7',
          label: 'application 1.7',
          icon: (
            <img
              style={{ width: '60px', height: '60px' }}
              src={defaultLogo}
              alt='smart b'
            ></img>
          )
        },
        {
          key: 'application 1.8',
          label: 'application 1.8',
          icon: (
            <img
              style={{ width: '60px', height: '60px' }}
              src={defaultLogo}
              alt='smart b'
            ></img>
          )
        },
        {
          key: 'application 1.9',
          label: 'application 1.9',
          icon: (
            <img
              style={{ width: '60px', height: '60px' }}
              src={defaultLogo}
              alt='smart b'
            ></img>
          )
        },
        {
          key: 'application 1.10',
          label: 'application 1.10',
          icon: (
            <img
              style={{ width: '60px', height: '60px' }}
              src={defaultLogo}
              alt='smart b'
            ></img>
          )
        },
        {
          key: 'application 1.11',
          label: 'application 1.11',
          icon: (
            <img
              style={{ width: '60px', height: '60px' }}
              src={defaultLogo}
              alt='smart b'
            ></img>
          )
        },
        {
          key: 'application 1.12',
          label: 'application 1.12',
          icon: (
            <img
              style={{ width: '60px', height: '60px' }}
              src={defaultLogo}
              alt='smart b'
            ></img>
          )
        },
        {
          key: 'application 1.13',
          label: 'application 1.13',
          icon: (
            <img
              style={{ width: '60px', height: '60px' }}
              src={defaultLogo}
              alt='smart b'
            ></img>
          )
        },
        {
          key: 'application 1.14',
          label: 'application 1.14',
          icon: (
            <img
              style={{ width: '60px', height: '60px' }}
              src={defaultLogo}
              alt='smart b'
            ></img>
          )
        },
        {
          key: 'application 1.15',
          label: 'application 1.15',
          icon: (
            <img
              style={{ width: '60px', height: '60px' }}
              src={defaultLogo}
              alt='smart b'
            ></img>
          )
        },
        {
          key: 'application 1.16',
          label: 'application 1.16',
          icon: (
            <img
              style={{ width: '60px', height: '60px' }}
              src={defaultLogo}
              alt='smart b'
            ></img>
          )
        },
        {
          key: 'application 1.17',
          label: 'application 1.17',
          icon: (
            <img
              style={{ width: '60px', height: '60px' }}
              src={defaultLogo}
              alt='smart b'
            ></img>
          )
        },
        {
          key: 'application 1.18',
          label: 'application 1.19',
          icon: (
            <img
              style={{ width: '60px', height: '60px' }}
              src={defaultLogo}
              alt='smart b'
            ></img>
          )
        }
      ]
    },
    {
      key: 'section 2',
      label: 'section 2',
      icon: (
        <img
          style={{ width: '30px', height: '30px', margin: '0' }}
          src={defaultLogo}
          alt='smart b'
        ></img>
      ),
      items: [
        {
          key: 'dashboard 2',
          label: 'dashboard 2',
          icon: (
            <img
              style={{ width: '60px', height: '60px' }}
              src={defaultLogo}
              alt='smart b'
            ></img>
          )
        },
        {
          key: 'activities 2',
          label: 'activities 2',
          icon: (
            <img
              style={{ width: '60px', height: '60px' }}
              src={defaultLogo}
              alt='smart b'
            ></img>
          )
        },
        {
          key: 'application 2',
          label: 'application 2',
          icon: (
            <img
              style={{ width: '60px', height: '60px' }}
              src={defaultLogo}
              alt='smart b'
            ></img>
          )
        }
      ]
    },
    {
      key: 'section 3',
      label: 'section 3',
      icon: (
        <img
          style={{ width: '30px', height: '30px', margin: '0' }}
          src={defaultLogo}
          alt='smart b'
        ></img>
      ),
      items: [
        {
          key: 'dashboard 3',
          label: 'dashboard 3',
          icon: (
            <img
              style={{ width: '60px', height: '60px' }}
              src={defaultLogo}
              alt='smart b'
            ></img>
          )
        },
        {
          key: 'activities 3',
          label: 'activities 3',
          icon: (
            <img
              style={{ width: '60px', height: '60px' }}
              src={defaultLogo}
              alt='smart b'
            ></img>
          )
        },
        {
          key: 'application 3',
          label: 'application 3',
          icon: (
            <img
              style={{ width: '60px', height: '60px' }}
              src={defaultLogo}
              alt='smart b'
            ></img>
          )
        }
      ]
    }
  ]
}

export const NoIconMultipleSectionMenuFull: Menu = {
  label: 'profile',
  key: 'profile',
  icon: <AccountCircle />,
  items: [
    {
      key: 'section 1',
      label: 'section 1',
      items: [
        {
          key: 'dashboard 1',
          label: 'dashboard 1'
        },
        {
          key: 'activities 1',
          label: 'activities 1'
        },
        {
          key: 'application 1.1',
          label: 'application 1.1'
        },
        {
          key: 'application 1.2',
          label: 'application 1.2'
        },
        {
          key: 'application 1.3',
          label: 'application 1.3'
        },
        {
          key: 'application 1.4',
          label: 'application 1.4'
        },
        {
          key: 'application 1.5',
          label: 'application 1.5'
        },
        {
          key: 'application 1.6',
          label: 'application 1.6'
        },
        {
          key: 'application 1.7',
          label: 'application 1.7'
        },
        {
          key: 'application 1.8',
          label: 'application 1.8'
        },
        {
          key: 'application 1.9',
          label: 'application 1.9'
        },
        {
          key: 'application 1.10',
          label: 'application 1.10'
        },
        {
          key: 'application 1.11',
          label: 'application 1.11'
        },
        {
          key: 'application 1.12',
          label: 'application 1.12'
        },
        {
          key: 'application 1.13',
          label: 'application 1.13'
        },
        {
          key: 'application 1.14',
          label: 'application 1.14'
        },
        {
          key: 'application 1.15',
          label: 'application 1.15'
        },
        {
          key: 'application 1.16',
          label: 'application 1.16'
        },
        {
          key: 'application 1.17',
          label: 'application 1.17'
        },
        {
          key: 'application 1.18',
          label: 'application 1.19'
        }
      ]
    },
    {
      key: 'section 2',
      label: 'section 2',
      items: [
        {
          key: 'dashboard 2',
          label: 'dashboard 2'
        },
        {
          key: 'activities 2',
          label: 'activities 2'
        },
        {
          key: 'application 2',
          label: 'application 2'
        }
      ]
    },
    {
      key: 'section 3',
      label: 'section 3',
      items: [
        {
          key: 'dashboard 3',
          label: 'dashboard 3'
        },
        {
          key: 'activities 3',
          label: 'activities 3'
        },
        {
          key: 'application 3',
          label: 'application 3'
        }
      ]
    }
  ]
}
