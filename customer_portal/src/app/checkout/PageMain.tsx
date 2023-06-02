"use client";

import React, { FC, Fragment, useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import useBookingStore from "@/app/store/bookingSlice";
import {
  Show,
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
  InputLeftAddon,
  InputGroup,
  Textarea,
  FormHelperText,
  Center,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
} from "@chakra-ui/react";

import { useToast } from "@chakra-ui/react";
import { Booking } from "@/app/store/models/booking";
import Label from "@/components/Label";
import CheckOutDateTable from "@/app/checkout/components/CheckOutDateTable";
import ApplicantCheckOutForm from "@/app/checkout/components/ApplicantCheckOutForm";

interface bookingInfo {
  booking: Booking;
  description: string;
}

interface FormProps {
  setActiveStep: React.SetStateAction<boolean>;
  activeStep: number;
}

const Form1: FC<FormProps> = ({ setActiveStep, activeStep }) => {
  const selecteddates = useBookingStore((state) => state.bookings);
  const eventType = useBookingStore((state) => state.eventType);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [checkedState, setCheckedState] = useState<boolean[]>([]);
  const [numOfDates, setNumOfDates] = useState(0);
  const [maxDates, setMaxDates] = useState(0);
  const [bookingsInfo, setBookingsInfo] = useState<bookingInfo[]>([]);

  const updateSelectedDates = (
    e: React.ChangeEvent<HTMLInputElement>,
    position: number
  ) => {
    if (checkedState.filter((i) => i).length >= maxDates && e.target.checked) {
      alert(
        "You have reached maximum number of booking slots selection allowed"
      );
      return;
    }

    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);
  };

  const setEventMaxBookings = () => {
    switch (eventType) {
      case "Wedding":
        setMaxDates(2);
        break;

      default:
        setMaxDates(1);
    }
  };

  useEffect(() => {
    setEventMaxBookings();
  }, []);

  useEffect(() => {
    let bookings: bookingInfo[] = [];
    let checkedStates: boolean[] = [];

    let sortedSelectedDates = selecteddates.sort((booking1, booking2) =>
      booking1.bookdate > booking2.bookdate ? 1 : -1
    );

    sortedSelectedDates.map((booking) => {
      booking.am_avail &&
        bookings.push({ booking, description: "0800 to 1230 hrs" }) &&
        checkedStates.push(false);
      booking.pm_avail &&
        bookings.push({ booking, description: "1230 to 1800 hrs" }) &&
        checkedStates.push(false);
    });
    setCheckedState(checkedStates);
    setBookingsInfo(bookings);
    console.log(checkedState);
  }, []);

  return (
    <>
      <Center>
        <CheckOutDateTable />
        {/*<Flex direction="column">
          {bookingsInfo.map((booking, index) => {
            return (
              <Checkbox
                key={booking.booking.id + index}
                id={`checkbox-${index}`}
                onChange={(e) => updateSelectedDates(e, index)}
                isChecked={checkedState[index]}
              >
                {booking.booking.bookdate} {booking.description}
              </Checkbox>
            );
          })}
        </Flex>*/}
      </Center>
      <ButtonGroup mt="5%" w="100%">
        <Flex w="100%" justifyContent="space-between">
          <Flex>
            <Button
              onClick={() => {
                setActiveStep(activeStep - 1);
              }}
              isDisabled={activeStep === 1}
              /*colorScheme="teal"*/
              variant="outline"
              w="7rem"
              mr="5%"
            >
              Back
            </Button>
            <Button
              w="7rem"
              isDisabled={activeStep === 3}
              onClick={() => {
                setActiveStep(activeStep + 1);
              }}
              colorScheme="teal"
              variant="outline"
            >
              Next
            </Button>
          </Flex>
        </Flex>
      </ButtonGroup>
    </>
  );
};

const Form2 = () => {
  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
        User Details
      </Heading>
      <FormControl as={GridItem} colSpan={[6, 3]}>
        <FormLabel
          htmlFor="country"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
        >
          Country / Region
        </FormLabel>
        <Select
          id="country"
          name="country"
          autoComplete="country"
          placeholder="Select option"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        >
          <option>United States</option>
          <option>Canada</option>
          <option>Mexico</option>
        </Select>
      </FormControl>

      <FormControl as={GridItem} colSpan={6}>
        <FormLabel
          htmlFor="street_address"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
          mt="2%"
        >
          Street address
        </FormLabel>
        <Input
          type="text"
          name="street_address"
          id="street_address"
          autoComplete="street-address"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        />
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
        <FormLabel
          htmlFor="city"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
          mt="2%"
        >
          City
        </FormLabel>
        <Input
          type="text"
          name="city"
          id="city"
          autoComplete="city"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        />
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
        <FormLabel
          htmlFor="state"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
          mt="2%"
        >
          State / Province
        </FormLabel>
        <Input
          type="text"
          name="state"
          id="state"
          autoComplete="state"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        />
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
        <FormLabel
          htmlFor="postal_code"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
          mt="2%"
        >
          ZIP / Postal
        </FormLabel>
        <Input
          type="text"
          name="postal_code"
          id="postal_code"
          autoComplete="postal-code"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        />
      </FormControl>
    </>
  );
};

const Form3: FC<FormProps> = ({ setActiveStep, activeStep }) => {
  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal">
        Social Handles
      </Heading>
      <SimpleGrid columns={1} spacing={6}>
        <FormControl as={GridItem} colSpan={[3, 2]}>
          <FormLabel
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: "gray.50",
            }}
          >
            Website
          </FormLabel>
          <InputGroup size="sm">
            <InputLeftAddon
              bg="gray.50"
              _dark={{
                bg: "gray.800",
              }}
              color="gray.500"
              rounded="md"
            >
              http://
            </InputLeftAddon>
            <Input
              type="tel"
              placeholder="www.example.com"
              focusBorderColor="brand.400"
              rounded="md"
            />
          </InputGroup>
        </FormControl>

        <FormControl id="email" mt={1}>
          <FormLabel
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: "gray.50",
            }}
          >
            About
          </FormLabel>
          <Textarea
            placeholder="you@example.com"
            rows={3}
            shadow="sm"
            focusBorderColor="brand.400"
            fontSize={{
              sm: "sm",
            }}
          />
          <FormHelperText>
            Brief description for your profile. URLs are hyperlinked.
          </FormHelperText>
        </FormControl>
      </SimpleGrid>
      <ButtonGroup mt="5%" w="100%">
        <Flex w="100%" justifyContent="space-between">
          <Flex>
            <Button
              onClick={() => {
                setActiveStep(activeStep - 1);
              }}
              isDisabled={activeStep === 1}
              /*colorScheme="teal"*/
              variant="outline"
              w="7rem"
              mr="5%"
            >
              Back
            </Button>
            <Button
              w="7rem"
              isDisabled={activeStep === 3}
              onClick={() => {
                isValid ? setActiveStep(activeStep + 1) : null;
              }}
              type="submit"
              colorScheme="teal"
              variant="outline"
            >
              Next
            </Button>
          </Flex>
        </Flex>
      </ButtonGroup>
    </>
  );
};

export interface CheckOutPageMainProps {}

const CheckOutPageMain: FC<CheckOutPageMainProps> = ({}) => {
  const toast = useToast();

  const steps = [
    { title: "Select Dates" },
    { title: "Personal Info" },
    { title: "Booking Summary" },
  ];

  const { activeStep, setActiveStep } = useSteps({
    index: 1,
    count: steps.length,
  });

  return (
    <>
      <Box
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth={800}
        p={6}
        m="20px auto"
        as="form"
      >
        <Show breakpoint="(max-width: 580px)">
          <Stepper index={activeStep} orientation="vertical" pb="20px">
            {steps.map((step, index) => (
              <Step key={index}>
                <StepIndicator>
                  <StepStatus
                    complete={<StepIcon />}
                    incomplete={<StepNumber />}
                    active={<StepNumber />}
                  />
                </StepIndicator>

                <Box flexShrink="0">
                  <StepTitle>{step.title}</StepTitle>
                </Box>
                <StepSeparator />
              </Step>
            ))}
          </Stepper>
        </Show>

        <Show breakpoint="(min-width: 580px)">
          <Stepper index={activeStep} height="auto" pb="20px">
            {steps.map((step, index) => (
              <Step key={index}>
                <StepIndicator>
                  <StepStatus
                    complete={<StepIcon />}
                    incomplete={<StepNumber />}
                    active={<StepNumber />}
                  />
                </StepIndicator>

                <Box flexShrink="0">
                  <StepTitle>{step.title}</StepTitle>
                </Box>

                <StepSeparator />
              </Step>
            ))}
          </Stepper>
        </Show>

        {activeStep === 1 ? (
          <Form1 setActiveStep={setActiveStep} activeStep={activeStep} />
        ) : activeStep === 2 ? (
          <ApplicantCheckOutForm
            setActiveStep={setActiveStep}
            activeStep={activeStep}
          />
        ) : (
          <Form3 setActiveStep={setActiveStep} activeStep={activeStep} />
        )}
      </Box>
    </>
  );
};

export default CheckOutPageMain;
