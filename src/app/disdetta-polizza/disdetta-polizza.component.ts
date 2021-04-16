import { Component, OnInit } from '@angular/core'
import { MessageService } from 'primeng/api'
import { DisdettaPolizzaService } from './disdetta-polizza.service'
import { CogitoResponse } from './model'
import {
    COGITO_RESPONSE1,
    COGITO_RESPONSE_ENG_1,
    COGITO_RESPONSE_ENG_2,
    COGITO_RESPONSE_ENG_3,
    mailCustomerCancellation, mailCustomerMissing, mailCustomerWrongAgency,
    mailOperationCancellation, mailOperationMissing, mailOperationWrongAgency,
} from './response1'
import * as _ from 'underscore'

@Component({
    selector: 'app-disdetta-polizza',
    templateUrl: './disdetta-polizza.component.html',
    styleUrls: ['./disdetta-polizza.component.css'],
    providers: [MessageService, DisdettaPolizzaService],
})
export class DisdettaPolizzaComponent implements OnInit {
    // pdfSrc = '/assets/data/pdf-test.pdf'
    // pdfSrc1 = '/assets/data/disdetta1.txt'
    uploadedFiles: any[] = []
    fileContent: string | ArrayBuffer = 'Please load a file'
    fileUploaded: File

    cogitoResponse1 = COGITO_RESPONSE1
    cogitoResponseEng1 = COGITO_RESPONSE_ENG_1
    cogitoResponseEng2 = COGITO_RESPONSE_ENG_2
    cogitoResponseEng3 = COGITO_RESPONSE_ENG_3

    templateCustomerMailCancellation = mailCustomerCancellation
    templateOperationMailCancellation = mailOperationCancellation
    templateCustomerMailMissing = mailCustomerMissing
    templateOperationMailMissing = mailOperationMissing
    templateCustomerMailWrongAgency = mailCustomerWrongAgency
    templateOperationMailWrongAgency = mailOperationWrongAgency

    customerMailCancellation
    operationMailCancellation
    customerMailMissing
    operationMailMissing
    customerMailWrongAgency
    operationMailWrongAgency


    inputRpa
    response: CogitoResponse
    cogitoDescription
    cogitoTemplate
    cogitoField
    cogitoAnnotation
    cogitoSynthesis

    contractor
    expDate
    mailDate
    policy
    company

    sendEnable = false
    constructor(private messageService: MessageService, private disdettaPolizzaService: DisdettaPolizzaService) {}

    ngOnInit(): void {}

    //
    // onBasicUploadAuto(event) {
    //   debugger;
    //   for (let file of event.files) {
    //     this.uploadedFiles.push(file);
    //   }
    //   debugger;
    //   this.messageService.add({
    //     severity: "info",
    //     summary: "File Uploaded",
    //     detail: "",
    //   });
    // }

    showInfo() {
        this.messageService.add({
            severity: 'info',
            summary: 'Info',
            detail: 'Message Content',
        })
    }

    public onChange(fileList: FileList): void {
        let file: File
        file = fileList[0]
        let fileReader: FileReader
        fileReader = new FileReader()
        let self: this
        self = this
        fileReader.onloadend = function (x) {
            self.fileContent = fileReader.result
        }
        fileReader.readAsText(file)
        this.fileUploaded = file

        this.sendEnable = true
    }

    public postFile() {
        this.disdettaPolizzaService.postFileCogito(this.fileUploaded).subscribe(
            (val) => {
                console.log('POST call successful value returned in body', val)
                this.messageService.add({
                    severity: 'info',
                    summary: 'Info',
                    detail: 'POST call successful value returned in body',
                })
                this.mappingCogito(val)
                this.sendEnable = false
            },
            (response) => {
                console.log('POST call in error', response)
                this.messageService.add({
                    severity: 'error',
                    summary: 'Info',
                    detail: 'POST call in error',
                })
            },
            () => {
                console.log('The POST observable is now completed.')
            }
        )
    }

    public get() {
        this.disdettaPolizzaService.get().subscribe((val) => {
            console.log('GET', val)
        })
    }

    public mappingCogito(temp: any) {
        this.cogitoField = temp.doc[0].knowledge[1].type[0]['type']
        this.cogitoTemplate = temp.doc[0].knowledge[1].type[1]['type']
        this.cogitoDescription = temp.doc[0].knowledge[1].descriptor
        this.cogitoAnnotation = temp.doc[0].knowledge[1].annotation
        if (temp.doc[0].knowledge[2] && temp.doc[0].knowledge[2].descriptor) {
            this.cogitoSynthesis = temp.doc[0].knowledge[2].descriptor
        }
        this.mappingCustomerMail()
    }

    public mappingCustomerMail() {
        this.contractor = this.getContractor().name
        this.expDate = this.getExpirationDate().name
        this.mailDate = this.getMailDate().name
        this.policy = this.getPolicy().name
        this.company = this.getCompany()
        debugger
        this.customerMailCancellation = this.templateCustomerMailCancellation
            .replace('$customer', this.contractor)
            .replace('$requestDate', this.mailDate)
            .replace('$expirationDate', this.expDate)
            .replace('$cancellationDate', this.add5Days(this.mailDate).toString())
            .replace('$policy', this.policy)
            .replace('$company', this.company)

        this.operationMailCancellation = this.templateOperationMailCancellation
            .replace('$customer', this.contractor)
            .replace('$requestDate', this.mailDate)
            .replace('$cancellationDate', this.add5Days(this.mailDate).toString())
            .replace('$expirationDate', this.expDate)
            .replace('$policy', this.policy)



        this.customerMailMissing = this.templateCustomerMailMissing
            .replace('$customer', this.contractor)
            .replace('$requestDate', this.mailDate)
            .replace('$expirationDate', this.expDate)
            .replace('$cancellationDate', this.add5Days(this.mailDate).toString())
            .replace('$policy', this.policy)
            .replace('$company', this.company)

        this.operationMailMissing = this.templateOperationMailMissing
            .replace('$customer', this.contractor)
            .replace('$requestDate', this.mailDate)
            .replace('$cancellationDate', this.add5Days(this.mailDate).toString())
            .replace('$expirationDate', this.expDate)
            .replace('$policy', this.policy)



        this.customerMailWrongAgency = this.templateCustomerMailWrongAgency
            .replace('$customer', this.contractor)
            .replace('$requestDate', this.mailDate)
            .replace('$expirationDate', this.expDate)
            .replace('$cancellationDate', this.add5Days(this.mailDate).toString())
            .replace('$policy', this.policy)
            .replace('$company', this.company)

        this.operationMailWrongAgency = this.templateOperationMailWrongAgency
            .replace('$customer', this.contractor)
            .replace('$requestDate', this.mailDate)
            .replace('$cancellationDate', this.add5Days(this.mailDate).toString())
            .replace('$expirationDate', this.expDate)
            .replace('$policy', this.policy)

        this.inputRpa = "Policy : "+ this.policy+ " \n"+
            "Customer : " + this.contractor + " \n" +
            "Cancellation date : " + this.mailDate;
    }

    public add5Days(theDate: string) {
        return new Date(Date.parse(theDate) + 5*24*60*60*1000);
    }
    public senderCustomerMail() {
        return _.find(this.cogitoAnnotation, function (temp) {
            return temp.type.includes('CANCELLATION@contractor')
        })
    }
    public toCustomerMail() {
        return _.find(this.cogitoAnnotation, function (temp) {
            return temp.type.includes('CANCELLATION@contractor')
        })
    }
    public ccCustomerMail() {
        return _.find(this.cogitoAnnotation, function (temp) {
            return temp.type.includes('CANCELLATION@contractor')
        })
    }
    public subjectCustomerMail() {
        return _.find(this.cogitoAnnotation, function (temp) {
            return temp.type.includes('CANCELLATION@contractor')
        })
    }
    public getContractor() {
        return _.find(this.cogitoAnnotation, function (temp) {
            return temp.type.includes('CANCELLATION@contractor')
        })
    }

    public getMailDate() {
        return _.find(this.cogitoAnnotation, function (temp) {
            return temp.type.includes('MAIL@mailDate')
        })
    }

    public getExpirationDate() {
        return _.find(this.cogitoAnnotation, function (temp) {
            return temp.type.includes('CANCELLATION@expirationDate')
        })
    }

    public getPolicy() {
        return _.find(this.cogitoAnnotation, function (temp) {
            return temp.type.includes('CANCELLATION@policyNumber')
        })
    }

    public getCompany() {
        let company = ''
        _.find(this.cogitoAnnotation, function (temp) {
            if (temp.type.includes('MAIL@respectable')) {
                company = company.concat(temp.name).concat(' ')
            }
        })
        return company
    }
}
