import { ChevronDownIcon, ChevronLeftIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'
import './App.scss'
import Button from './components/Button/Button'
import SectionContainer from './components/SectionContainer'
import BodyContainer from './components/body-container/BodyContainer'
import DropdownMenu from './components/dropdown/DropdownMenu'
import FormInputLabel from './components/form-input-label/FormInputLabel'
import Header from './components/header/Header'
import IconFile from './components/icons/IconFile'
import LogisticTypeMenu, { LogisticType } from './components/logistic-type-menu/LogisticTypeMenu'
import TabMenu from './components/tab-menu/TabMenu'

const addresses = [
  'New York, NY, USA',
  'Los Angeles, CA, USA',
  'Chicago, IL, USA',
  'Houston, TX, USA',
  'Philadelphia, PA, USA',
  'Phoenix, AZ, USA',
]

const notesTabMenu = [
  {name: 'Work Instructions', id: 'work-instructions'},
  {name: 'Internal Notes', id: 'internal-notes'},
  {name: 'Field Notes', id: 'field-notes'},
]

const headerMenu = [
  {name: 'General', id: 'general'},
  {name: 'Order Details', id: 'order-details'},
  {name: 'Estimate', id: 'estimate'},
  {name: 'Invoices', id: 'invoices'},
  {name: 'Time Sheets', id: 'time-sheets'},
  {name: 'Reporting', id: 'reporting'},
  {name: 'Asset Purchase', id: 'asset-purchase'},
  {name: 'Notifications', id: 'notifications'},
  {name: 'Activity', id: 'activity'},
]

const filesMenu = [
  {name: 'Files', id: 'files'},
  {name: 'Images', id: 'images'},
]

function App() {
  const [selectedNotesTab, setSelectedNotesTab] = useState(notesTabMenu[0].id)
  const [selectedHeaderMenu, setHeaderMenu] = useState(headerMenu[0].id)
  const [selectedFilesMenu, setFilesMenu] = useState(filesMenu[0].id)
  const [form, setForm] = useState({
    pickUpLocation: '',
    logisticType: 'our-trucking',
  })

  const handleFormUpdate = (key: string, value: any) => {
    setForm({
      ...form,
      [key]: value,
    })
  }
  
  return (
    <>
      <Header />
      <div className="flex flex-col flex-grow content">
        <div className="flex items-center justify-between px-6 py-3 shadow app-header">
          <div className="flex items-center">
            <button className='p-1 rounded shadow-sm border-1'><ChevronLeftIcon className='h-8' /></button>
            <h1 className='ml-3 text-2xl font-semibold'>Create Inbound Order</h1>
          </div>
          <div className="flex items-center gap-3 action-buttons">
            <Button>To Dispatch</Button>
            <div className="w-0 border-r-1 h-7"></div>
            <Button>Actions <ChevronDownIcon className='h-4 ml-1' /></Button>
            <Button intent="primary">Create Order</Button>
          </div>
        </div>
        <TabMenu menuItems={headerMenu} activeTab={selectedHeaderMenu} onTabChange={tab => setHeaderMenu(tab)} />
        {/* <Menu  /> */}

        <BodyContainer>
          <div className='p-4 bg-white rounded'>
            <h4 className='mb-4 text-base font-semibold'>General</h4>
            <div className="flex gap-4">
              <div className='flex-1'>
                <FormInputLabel label='Account Name' required>
                  <input type="text" placeholder='Input text' className='px-2 py-1 text-sm border-gray-200 rounded border-1' />
                </FormInputLabel>
                <FormInputLabel label='Job Type' required>
                  <input type="text" placeholder='Input text' className='px-2 py-1 text-sm border-gray-200 rounded border-1' />
                </FormInputLabel>
              </div>
              <div className='flex-1'>
                <FormInputLabel label='Pick Up Location'>
                  <DropdownMenu options={addresses} value={form.pickUpLocation} searchable onSelectItem={val => handleFormUpdate('pickUpLocation', val)} />
                </FormInputLabel>
                <FormInputLabel label='Primary Contact'>
                  <input type="text" placeholder='Input text' className='px-2 py-1 text-sm border-gray-200 rounded border-1' />
                </FormInputLabel>
              </div>
            </div>
          </div>
          <SectionContainer>
            <h4 className='mb-4 text-base font-semibold'>Select Logistic Type</h4>
            <LogisticTypeMenu onSelect={val => handleFormUpdate('logisticType', val)} value={form.logisticType as LogisticType}/>
          </SectionContainer>
          <SectionContainer>
            <h4 className='mb-4 text-base font-semibold'>Notes</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="">
                <div className="border-gray-200 rounded border-1">
                  <TabMenu menuItems={notesTabMenu} activeTab={selectedNotesTab} onTabChange={tab => setSelectedNotesTab(tab)} />
                  <div className="px-4 py-2">
                    <div className="flex flex-col">
                      <FormInputLabel label='Preselected Text'>
                        <DropdownMenu options={addresses} value={form.pickUpLocation} searchable onSelectItem={val => handleFormUpdate('pickUpLocation', val)} />
                      </FormInputLabel>
                    </div>
                    <textarea name="" id="" rows={4} className='w-full px-2 py-1 text-sm border-gray-200 rounded-sm border-1'></textarea>
                  </div>
                </div>
              </div>
            </div>
          </SectionContainer>
          <SectionContainer>
            <h4 className='mb-4 text-base font-semibold'>Files and Images</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="">
                <div className="border-gray-200 border-dashed rounded border-1">
                  <TabMenu menuItems={filesMenu} intent='full' activeTab={selectedFilesMenu} onTabChange={tab => setFilesMenu(tab)} />
                  <div className="flex flex-col items-center px-4 py-6 text-sm text-gray-500 justify-items-center">
                    <div className='flex mb-2'>
                      <IconFile className='mr-1' />
                      Drag & Drop or <span className='ml-1 font-semibold underline '>Browse</span>
                    </div>
                    <div>.PDF, .docs, .xlsx are allowed. Max 10mb</div>
                  </div>
                </div>
              </div>
            </div>
          </SectionContainer>
        </BodyContainer>
      </div>

    </>
  )
}

export default App

