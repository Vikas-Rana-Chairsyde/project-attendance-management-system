'use client';

import { useField, useFormikContext } from 'formik';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useRef, useState, forwardRef } from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import "./index.module.scss";

type Props = {
  name: string;
};

export default function DateOfBirthField({ name }: Props) {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);
  const [open, setOpen] = useState(false);

  const selectedDate = field.value ? new Date(field.value) : null;

  const CustomInput = forwardRef<HTMLDivElement>((_props, ref) => {
    return (
      <div
        ref={ref}
        style={{
          display: 'flex',
          alignItems: 'center',
          border: '1px solid #E5E7EB',
          backgroundColor: '#ffffff',
          color: '#111827',
          fontSize: '14px',
          fontWeight: 400,
          lineHeight: 1.6,
          borderRadius: '5px',
          padding: '0.5rem 0.625rem',
          height: '38px',
          width: '100%',
          justifyContent: 'space-between',
          cursor: 'default',
        }}
      >
        <span>
          {selectedDate ? selectedDate.toLocaleDateString('en-GB') : 'dd/mm/yyyy'}
        </span>
        <button
          type="button"
          onClick={() => setOpen(true)}
          style={{
            background: 'none',
            border: 'none',
            padding: 0,
            marginLeft: '8px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <FaCalendarAlt size={16} />
        </button>
      </div>
    );
  });

  CustomInput.displayName = 'CustomInput';

  return (
    <div style={{ position: 'relative' }}>
      <DatePicker
        selected={selectedDate}
        onChange={(val) => {
          setFieldValue(name, val);
          setOpen(false);
        }}
        open={open}
        onClickOutside={() => setOpen(false)}
        onSelect={() => setOpen(false)}
        showYearDropdown
        showMonthDropdown
        scrollableYearDropdown
        yearDropdownItemNumber={100}
        maxDate={new Date()}
        dateFormat="dd/MM/yyyy"
        customInput={<CustomInput />}
      />

      {meta.touched && meta.error && (
        <div style={{ color: 'red', marginTop: '4px' }}>{meta.error}</div>
      )}
    </div>
  );
}
