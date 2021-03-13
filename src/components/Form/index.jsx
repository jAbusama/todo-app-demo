import React, { useEffect, useState } from 'react';
import { Col, Input, Row, DatePicker, TimePicker } from 'antd';
import moment from 'moment';
import './style.scss';

function disabledDate(current) {
  return current && current < moment().subtract(1, 'day');
}

const Form = (props) => {
  const { formValues, section, onChangeHandler } = props;

  const [formData, setFormData] = useState(formValues);

  useEffect(() => {
    setFormData(formValues);
  }, [formValues]);

  //   const initValidate = {
  //     title: {
  //       value: '',
  //       touch: false,
  //     },
  //     note: {
  //       value: '',
  //       touch: false,
  //     },
  //     date: {
  //       value: '',
  //       touch: false,
  //     },
  //     time: {
  //       value: '',
  //       touch: false,
  //     },
  //   };

  const inputType = {
    Todo: [
      { label: 'Todo Title', type: 'Input', name: 'title' },
      { label: 'Note', type: 'Input', name: 'note' },
      {
        label: 'Select Date',
        type: 'DatePicker',
        name: 'date',
        options: ['Today', 'Tomorrow', 'Custom'],
      },
      {
        label: 'Select Time',
        type: 'TimePicker',
        name: 'time',
        options: ['9:30', '10:00', 'Custom'],
      },
    ],
  };

  const onChangeTime = (time) => {
    onChangeHandler('time', moment(time).format());
  };

  const onChangeDate = (date) => {
    onChangeHandler('date', moment(date).format());
  };

  const onChange = (e) => {
    onChangeHandler(e.target.name, e.target.value);
  };

  const renderInputs = () => {
    const items = [];

    inputType[section].forEach((element) => {
      items.push(
        <Col
          sm={
            element.type === 'DatePicker' || element.type === 'TimePicker'
              ? 10
              : 20
          }
          key={element.name}
        >
          {element.type === 'Input' ? (
            <Input
              placeholder={element.label}
              style={{
                width: '100%',
                fontSize: '1.8rem',
              }}
              name={element.name}
              value={formData[element.name]}
              onChange={onChange}
            />
          ) : element.type === 'DatePicker' ? (
            <DatePicker
              mode={element.name}
              placeholder={element.label}
              style={{
                width: '100%',
                fontSize: '1.8rem',
              }}
              disabledDate={disabledDate}
              onChange={onChangeDate}
              value={formData[element.name] && moment(formData[element.name])}
            />
          ) : (
            <TimePicker
              style={{
                width: '100%',
                fontSize: '1.8rem',
              }}
              value={formData[element.name] && moment(formData[element.name])}
              defaultPickerValue={moment('00:00:00', 'HH:mm:ss')}
              onChange={onChangeTime}
            />
          )}
        </Col>
      );
    });
    return items;
  };

  return (
    <div className='form'>
      <Row justify='center' gutter={[16, 24]}>
        {renderInputs()}
      </Row>
    </div>
  );
};

export default Form;
