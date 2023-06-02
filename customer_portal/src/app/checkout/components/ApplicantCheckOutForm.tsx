"use client";

import { Formik, Field } from "formik";
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  useToast,
  CreateToastFnReturn,
  AbsoluteCenter,
  Divider,
  Stack,
  Text,
  Grid,
  GridItem,
  Textarea,
} from "@chakra-ui/react";
import React, { FC } from "react";
import GroomCheckOutForm from "@/app/checkout/components/GroomCheckOutForm";

interface ApplicantCheckOutFormProps {
  setActiveStep: React.SetStateAction<boolean>;
  activeStep: number;
}

interface initialValues {
  name: string;
  nric: string;
}

const ApplicantCheckOutForm: FC<ApplicantCheckOutFormProps> = ({
  setActiveStep,
  activeStep,
}) => {
  const renderApplCheckOutForm = () => {
    const toast = useToast();
    const checkRequiredFields = (
      values: initialValues,
      toast: CreateToastFnReturn
    ) => {
      const toastWrapper = (description: string) => {
        toast({
          position: "top-right",
          description: description,
          isClosable: true,
          duration: 4000,
        });
      };

      if (values.name.length == 0) {
        toastWrapper("Name cannot be empty");
        return false;
      }

      if (values.nric.length == 0) {
        toastWrapper("NRIC cannot be empty");
        return false;
      }

      return true;
    };

    return (
      <>
        <Formik
          initialValues={{
            name: "john",
            nric: "",
            mobile: "",
            landline: "",
            email: "",
            blockNum: "",
            unitNum: "",
            streetName: "",
            country: "",
            postalCode: "",
            remarks: "",
          }}
          onSubmit={(values) => {
            console.log(values.nric);
          }}
        >
          {({ handleSubmit, errors, values, touched, isValid }) => (
            <div>
              <Stack>
                <Flex
                  justify="center"
                  direction="column"
                  p="10px"
                  gap="10px"
                  bgGradient="linear(to-r, yellow.200, yellow.300, yellow.500)"
                  borderRadius="xl"
                >
                  <Text fontSize="2xl">Applicant</Text>
                  <Divider orientation="horizontal" borderColor="black" />
                </Flex>
                <Flex
                  p="20px"
                  gap="30px"
                  justify="center"
                  direction={{ base: "column", sm: "row" }}
                >
                  <FormControl isRequired={true}>
                    <FormLabel htmlFor="name">Full Name</FormLabel>
                    <Field
                      as={Input}
                      id="name"
                      name="name"
                      type="text"
                      variant="filled"
                    />
                  </FormControl>
                  <FormControl
                    isInvalid={!!errors.nric && touched.nric}
                    isRequired={true}
                  >
                    <FormLabel htmlFor="nric">
                      NRIC (last 4 characters)
                    </FormLabel>
                    <Field
                      as={Input}
                      id="nric"
                      name="nric"
                      type="text"
                      variant="filled"
                      validate={(value: string) => {
                        let error;

                        if (value.length > 4) {
                          error = "NRIC contains more than 4 characters";
                        }

                        return error;
                      }}
                    />
                    <FormErrorMessage>{errors.nric}</FormErrorMessage>
                  </FormControl>
                </Flex>
                <Flex
                  p="20px"
                  gap="30px"
                  justify="center"
                  direction={{ base: "column", sm: "row" }}
                >
                  <FormControl isRequired={true}>
                    <FormLabel htmlFor="mobile">Mobile No.</FormLabel>
                    <Field
                      as={Input}
                      id="mobile"
                      name="mobile"
                      type="text"
                      variant="filled"
                    />
                  </FormControl>
                  <FormControl
                    isInvalid={!!errors.nric && touched.nric}
                    isRequired={true}
                  >
                    <FormLabel htmlFor="landline">Home / Office No.</FormLabel>
                    <Field
                      as={Input}
                      id="landline"
                      name="landline"
                      type="text"
                      variant="filled"
                      validate={(value: string) => {
                        let error;

                        return error;
                      }}
                    />
                    <FormErrorMessage>{errors.landline}</FormErrorMessage>
                  </FormControl>
                </Flex>
                <Flex
                  p="20px"
                  gap="30px"
                  justify="center"
                  direction={{ base: "column", sm: "row" }}
                >
                  <FormControl isRequired={true}>
                    <FormLabel htmlFor="email">Email Account</FormLabel>
                    <Field
                      as={Input}
                      id="email"
                      name="email"
                      type="text"
                      variant="filled"
                    />
                  </FormControl>
                  <FormControl
                    isInvalid={!!errors.email && touched.email}
                    isRequired={true}
                  >
                    <FormLabel htmlFor="blockNum">Block No.</FormLabel>
                    <Field
                      as={Input}
                      id="blockNum"
                      name="blockNum"
                      type="text"
                      variant="filled"
                      validate={(value: string) => {
                        let error;

                        return error;
                      }}
                    />
                    <FormErrorMessage>{errors.blockNum}</FormErrorMessage>
                  </FormControl>
                </Flex>
                <Flex
                  p="20px"
                  gap="30px"
                  justify="center"
                  direction={{ base: "column", sm: "row" }}
                >
                  <FormControl isRequired={true}>
                    <FormLabel htmlFor="unitNum">Unit No.</FormLabel>
                    <Field
                      as={Input}
                      id="unitNum"
                      name="unitNum"
                      type="text"
                      variant="filled"
                    />
                  </FormControl>
                  <FormControl
                    isInvalid={!!errors.streetName && touched.streetName}
                    isRequired={true}
                  >
                    <FormLabel htmlFor="streetName">Street Name</FormLabel>
                    <Field
                      as={Input}
                      id="streetName"
                      name="streetName"
                      type="text"
                      variant="filled"
                      validate={(value: string) => {
                        let error;

                        return error;
                      }}
                    />
                    <FormErrorMessage>{errors.streetName}</FormErrorMessage>
                  </FormControl>
                </Flex>
                <Grid
                  p="20px"
                  gap="30px"
                  templateRows={{
                    base: "repeat(3, 1fr)",
                    sm: "repeat(2, 1fr)",
                  }}
                  templateColumns={{
                    base: "repeat(1, 1fr)",
                    sm: "repeat(2, 1fr)",
                  }}
                  column={{ base: "1", sm: "2" }}
                  row={{ base: "3", sm: "2" }}
                >
                  <GridItem>
                    <FormControl isRequired={true}>
                      <FormLabel htmlFor="country">Country</FormLabel>
                      <Field
                        as={Input}
                        id="country"
                        name="country"
                        type="text"
                        variant="filled"
                      />
                    </FormControl>
                  </GridItem>
                  <GridItem>
                    <FormControl
                      isInvalid={!!errors.postalCode && touched.postalCode}
                      isRequired={true}
                    >
                      <FormLabel htmlFor="postalCode">Postal Code</FormLabel>
                      <Field
                        as={Input}
                        id="postalCode"
                        name="postalCode"
                        type="text"
                        variant="filled"
                        validate={(value: string) => {
                          let error;

                          return error;
                        }}
                      />
                      <FormErrorMessage>{errors.postalCode}</FormErrorMessage>
                    </FormControl>
                  </GridItem>
                  <GridItem colSpan={2}>
                    <FormControl>
                      <FormLabel htmlFor="remarks">Remarks</FormLabel>
                      <Textarea resize="none" />
                    </FormControl>
                  </GridItem>
                </Grid>
              </Stack>
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
                      isDisabled={!isValid}
                      onClick={() => {
                        checkRequiredFields(values, toast)
                          ? setActiveStep(activeStep + 1)
                          : null;
                      }}
                      colorScheme="teal"
                      variant="outline"
                    >
                      Next
                    </Button>
                  </Flex>
                </Flex>
              </ButtonGroup>
            </div>
          )}
        </Formik>
      </>
    );
  };

  return renderApplCheckOutForm();
};

export default ApplicantCheckOutForm;
