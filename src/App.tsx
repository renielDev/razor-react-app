import { ChevronDownIcon, ChevronLeftIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'
import './App.scss'
import Button from './components/button/Button'
import SectionContainer from './components/SectionContainer'
import BodyContainer from './components/body-container/BodyContainer'
import DropdownMenu from './components/dropdown/DropdownMenu'
import FormInputLabel from './components/form-input-label/FormInputLabel'
import Header from './components/header/Header'
import InputFile from './components/input-file/InputFile'
import LogisticTypeMenu, { LogisticType } from './components/logistic-type-menu/LogisticTypeMenu'
import TabMenu from './components/tab-menu/TabMenu'
import Textarea from './components/textarea/Textarea'
import TextInput from './components/textinput/Textinput'

const addresses = [
  'New York, NY, USA',
  'Los Angeles, CA, USA',
  'Chicago, IL, USA',
  'Houston, TX, USA',
  'Philadelphia, PA, USA',
  'Phoenix, AZ, USA',
]

const notesTabMenu = [
  { name: 'Work Instructions', id: 'work-instructions' },
  { name: 'Internal Notes', id: 'internal-notes' },
  { name: 'Field Notes', id: 'field-notes' },
]

const headerMenu = [
  { name: 'General', id: 'general' },
  { name: 'Order Details', id: 'order-details' },
  { name: 'Estimate', id: 'estimate' },
  { name: 'Invoices', id: 'invoices' },
  { name: 'Time Sheets', id: 'time-sheets' },
  { name: 'Reporting', id: 'reporting' },
  { name: 'Asset Purchase', id: 'asset-purchase' },
  { name: 'Notifications', id: 'notifications' },
  { name: 'Activity', id: 'activity' },
]

const filesMenu = [
  { name: 'Files', id: 'files' },
  { name: 'Images', id: 'images' },
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

        <BodyContainer>
          <div className='p-4 bg-white rounded'>
            <h4 className='mb-4 text-base font-semibold'>General</h4>
            <div className="flex gap-4">
              <div className='flex-1'>
                <FormInputLabel label='Account Name' required>
                  <TextInput placeholder='Input text' />
                </FormInputLabel>
                <FormInputLabel label='Job Type' required>
                  <TextInput placeholder='Input text' />
                </FormInputLabel>
              </div>
              <div className='flex-1'>
                <FormInputLabel label='Pick Up Location'>
                  <DropdownMenu options={addresses} value={form.pickUpLocation} searchable onSelectItem={val => handleFormUpdate('pickUpLocation', val)} />
                </FormInputLabel>
                <FormInputLabel label='Primary Contact'>
                  <TextInput placeholder='Input text' />
                </FormInputLabel>
              </div>
            </div>
            <div className="flex gap-2 mt-2">
              <Button className='text-primary-base'>+ Add Alternate Contact</Button>
              <Button className='text-primary-base'>+ Add Pimary Contact</Button>
            </div>
          </div>
          <SectionContainer>
            <h4 className='mb-4 text-base font-semibold'>Select Logistic Type</h4>
            <LogisticTypeMenu onSelect={val => handleFormUpdate('logisticType', val)} value={form.logisticType as LogisticType} />
          </SectionContainer>
          <SectionContainer>
            <h4 className='mb-4 text-base font-semibold'>Schedule</h4>
            <div className="flex gap-4">
              <div className='flex-1'>
                <FormInputLabel label='Date' className='mb-0' />
                <FormInputLabel label='Start Date' required>
                  <DropdownMenu options={addresses} value={form.pickUpLocation} searchable onSelectItem={val => handleFormUpdate('pickUpLocation', val)} />
                </FormInputLabel>
                <FormInputLabel label='End Date' required>
                  <DropdownMenu options={addresses} value={form.pickUpLocation} searchable onSelectItem={val => handleFormUpdate('pickUpLocation', val)} />
                </FormInputLabel>
              </div>
              <div className='flex-1'>
                <FormInputLabel label='Time' className='mb-0' />
                <FormInputLabel label='Start Time' required>
                  <TextInput placeholder='Input text' />
                </FormInputLabel>
                <FormInputLabel label='End Time' required>
                  <TextInput placeholder='Input text' />
                </FormInputLabel>
              </div>
            </div>
            <div className="flex gap-2 mt-2">
              <Button>Check Calendars</Button>
              <Button className='text-red-600'>Clear Dates</Button>
            </div>
            <div className="w-full my-6 border-gray-200 border-1"></div>
            <FormInputLabel label='Member & Resource' className='mb-0' />
            <div className="flex gap-4">
              <div className='flex-1'>
                <FormInputLabel label='Team Member'>
                  <DropdownMenu options={addresses} value={form.pickUpLocation} searchable onSelectItem={val => handleFormUpdate('pickUpLocation', val)} />
                </FormInputLabel>
              </div>
              <div className='flex-1'>
                <FormInputLabel label='Truck Resources' required>
                  <DropdownMenu options={addresses} value={form.pickUpLocation} searchable onSelectItem={val => handleFormUpdate('pickUpLocation', val)} />
                </FormInputLabel>
              </div>
            </div>
          </SectionContainer>

          <SectionContainer>
            <h4 className='mb-4 text-base font-semibold'>Tags</h4>
            <div className="grid grid-cols-2 gap-4">
              <Textarea placeholder='Enter tags' />
            </div>
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
                    <Textarea placeholder='Enter notes here...' rows={4} />
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
                  <InputFile onFileSelect={() => { }} />
                </div>
              </div>
            </div>
          </SectionContainer>

          <SectionContainer>
            <h4 className='mb-4 text-base font-semibold'>Tags</h4>
            <div className="flex gap-4">
              <Textarea placeholder='Enter tags' className='flex-1' />
            </div>
          </SectionContainer>

          <SectionContainer>
            <h4 className='mb-4 text-base font-semibold'>Estimated Equipment</h4>
            <div className="flex gap-4">
              <div className='flex-1'>
                <FormInputLabel label='Pallet Count'>
                  <DropdownMenu options={addresses} value={form.pickUpLocation} searchable onSelectItem={val => handleFormUpdate('pickUpLocation', val)} />
                </FormInputLabel>
              </div>
              <div className='flex-1'>
                <FormInputLabel label='Net Weight'>
                  <TextInput placeholder='Input text' />
                </FormInputLabel>
              </div>
            </div>
          </SectionContainer>

          <SectionContainer>
            <h4 className='mb-4 text-base font-semibold'>References</h4>
            <div className="flex gap-4">
              <div className='flex-1'>
                <FormInputLabel label='BOL'>
                  <TextInput placeholder='Input text' />
                </FormInputLabel>
                <FormInputLabel label='PO Number'>
                  <TextInput placeholder='Input text' />
                </FormInputLabel>
              </div>
              <div className='flex-1'>
                <FormInputLabel label='Reference 1' >
                  <TextInput placeholder='Input text' />
                </FormInputLabel>
                <FormInputLabel label='Reference 2' >
                  <TextInput placeholder='Input text' />
                </FormInputLabel>
                <Button className='text-primary-base'>+ Add More Reference</Button>
              </div>
            </div>
          </SectionContainer>
        </BodyContainer>
      </div>

    </>
  )
}

export default App

