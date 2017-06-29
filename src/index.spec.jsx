import expect from 'expect.js';
import remap from './index';

const MOCK_MAP = {
  'id': 'id',
  'username': 'username',
  'active': 'active',
  'status': 'status',
  'contact.firstName': 'contactFirstName',
  'contact.lastName': 'contactLastName',
  'contact.phone': 'contactPhone',
  'contact.email': 'contactEmail',
  'contact.meta.isConnected': 'contactMetaIsConnected',
  'addresses.0.addressLine1': 'address0Line1',
  'addresses.0.addressLine2': 'address0Line2',
  'addresses.0.city': 'address0City',
  'addresses.0.state': 'address0State',
  'addresses.0.zip': 'address0Zip'
};
const MOCK_DATA = {
  id: 1,
  username: 'User Name',
  active: true,
  status: 'Status',
  contactFirstName: 'First',
  contactLastName: 'Last',
  contactPhone: '0 000-000-0000',
  contactEmail: 'first.last@example.com',
  contactMetaIsConnected: true,
  address0Line1: 'Address Line 1',
  address0Line2: 'Address Line 2',
  address0City: 'City',
  address0State: 'State',
  address0Zip: '00000'
};
const MOCK_ARRAY_MAP = {
  '0.id': '0.id',
  '0.username': '0.username',
  '0.active': '0.active',
  '0.status': '0.status',
  '1.contact.firstName': '1.contactFirstName',
  '1.contact.lastName': '1.contactLastName',
  '1.contact.phone': '1.contactPhone',
  '1.contact.email': '1.contactEmail',
  '1.contact.meta.isConnected': '1.contactMetaIsConnected',
  '2.addresses.0.addressLine1': '2.address0Line1',
  '2.addresses.0.addressLine2': '2.address0Line2',
  '2.addresses.0.city': '2.address0City',
  '2.addresses.0.state': '2.address0State',
  '2.addresses.0.zip': '2.address0Zip'
};
const MOCK_ARRAY_DATA = [
  {
    id: 1,
    username: 'User Name 1',
    active: true,
    status: 'Status 1',
    contactFirstName: 'First 1',
    contactLastName: 'Last 1',
    contactPhone: '1 111-111-1111',
    contactEmail: 'first.last1@example.com',
    contactMetaIsConnected: true,
    address0Line1: 'Address Line 1 1',
    address0Line2: 'Address Line 2 1',
    address0City: 'City 1',
    address0State: 'State 1',
    address0Zip: '11111'
  },
  {
    id: 2,
    username: 'User Name 2',
    active: true,
    status: 'Status 2',
    contactFirstName: 'First 2',
    contactLastName: 'Last 2',
    contactPhone: '2 222-222-2222',
    contactEmail: 'first.last2@example.com',
    contactMetaIsConnected: true,
    address0Line1: 'Address Line 1 2',
    address0Line2: 'Address Line 2 2',
    address0City: 'City 2',
    address0State: 'State 2',
    address0Zip: '22222'
  },
  {
    id: 3,
    username: 'User Name 3',
    active: true,
    status: 'Status 3',
    contactFirstName: 'First 3',
    contactLastName: 'Last 3',
    contactPhone: '3 333-333-3333',
    contactEmail: 'first.last3@example.com',
    contactMetaIsConnected: true,
    address0Line1: 'Address Line 1 3',
    address0Line2: 'Address Line 2 3',
    address0City: 'City 3',
    address0State: 'State 3',
    address0Zip: '33333'
  }
];
const MOCK_ARRAY_TO_OBJECT_MAP = {
  'id': '0.id',
  'username': '0.username',
  'active': '0.active',
  'status': '0.status',
  'contact.firstName': '1.contactFirstName',
  'contact.lastName': '1.contactLastName',
  'contact.phone': '1.contactPhone',
  'contact.email': '1.contactEmail',
  'contact.meta.isConnected': '1.contactMetaIsConnected',
  'addresses.0.addressLine1': '2.address0Line1',
  'addresses.0.addressLine2': '2.address0Line2',
  'addresses.0.city': '2.address0City',
  'addresses.0.state': '2.address0State',
  'addresses.0.zip': '2.address0Zip'
};

module.exports = {
  remap: {
    'should be a function': () => {
      expect(remap).to.be.a(Function);
    },
    'should remap an object': () => {
      const newValue = remap(MOCK_DATA, MOCK_MAP);

      expect(newValue).to.be.an(Object);
      expect(newValue.username).to.equal('User Name');
      expect(newValue.contact).to.be.an(Object);
      expect(newValue.contact.firstName).to.equal('First');
      expect(newValue.addresses).to.be.an(Array);
      expect(newValue.addresses[0]).to.be.an(Object);
      expect(newValue.addresses[0].zip).to.equal('00000');
    },
    'should remap an array': () => {
      const newValue = remap(MOCK_ARRAY_DATA, MOCK_ARRAY_MAP, true);

      expect(newValue).to.be.an(Array);
      expect(newValue[0]).to.be.an(Object);
      expect(newValue[1]).to.be.an(Object);
      expect(newValue[2]).to.be.an(Object);
      expect(newValue[0].username).to.equal('User Name 1');
      expect(newValue[1].contact).to.be.an(Object);
      expect(newValue[1].contact.firstName).to.equal('First 2');
      expect(newValue[2].addresses).to.be.an(Array);
      expect(newValue[2].addresses[0]).to.be.an(Object);
      expect(newValue[2].addresses[0].zip).to.equal('33333');
    },
    'should remap an array to an object': () => {
      const newValue = remap(MOCK_ARRAY_DATA, MOCK_ARRAY_TO_OBJECT_MAP);

      expect(newValue).to.be.an(Object);
      expect(newValue.username).to.equal('User Name 1');
      expect(newValue.contact).to.be.an(Object);
      expect(newValue.contact.firstName).to.equal('First 2');
      expect(newValue.addresses).to.be.an(Array);
      expect(newValue.addresses[0]).to.be.an(Object);
      expect(newValue.addresses[0].zip).to.equal('33333');
    }
  }
};
