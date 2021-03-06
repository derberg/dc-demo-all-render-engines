export const odataSpecMock = `<?xml version="1.0" encoding="utf-8"?>
<edmx:Edmx Version="1.0" 
    xmlns:edmx="http://schemas.microsoft.com/ado/2007/06/edmx" 
    xmlns:m="http://schemas.microsoft.com/ado/2007/08/dataservices/metadata" 
    xmlns:sap="http://www.sap.com/Protocols/SAPData">
    <edmx:DataServices m:DataServiceVersion="2.0">
        <Schema Namespace="API_MKT_AGREEMENT_SRV" xml:lang="en" sap:schema-version="1" 
            xmlns="http://schemas.microsoft.com/ado/2008/09/edm">
            <EntityType Name="AgrmtAdditionalExtID" sap:content-version="1">
                <Key>
                    <PropertyRef Name="MKT_AgreementOrigin"/>
                    <PropertyRef Name="MKT_AgreementExternalID"/>
                    <PropertyRef Name="MKT_AgrmtAddlExternalOrigin"/>
                    <PropertyRef Name="MKT_AgreementAddlExternalID"/>
                </Key>
                <Property Name="MKT_AgreementOrigin" Type="Edm.String" Nullable="false" MaxLength="30" sap:unicode="false" sap:label="Agreement Origin" sap:updatable="false"/>
                <Property Name="MKT_AgreementExternalID" Type="Edm.String" Nullable="false" MaxLength="80" sap:unicode="false" sap:label="Agreement ID" sap:updatable="false"/>
                <Property Name="MKT_AgrmtAddlExternalOrigin" Type="Edm.String" Nullable="false" MaxLength="30" sap:unicode="false" sap:label="Addtnl Origiin ID" sap:updatable="false"/>
                <Property Name="MKT_AgreementAddlExternalID" Type="Edm.String" Nullable="false" MaxLength="80" sap:unicode="false" sap:label="Additional ID" sap:updatable="false"/>
            </EntityType>
            <EntityType Name="Agreement" sap:content-version="1">
                <Key>
                    <PropertyRef Name="MKT_AgreementOrigin"/>
                    <PropertyRef Name="MKT_AgreementExternalID"/>
                </Key>
                <Property Name="MKT_AgreementOrigin" Type="Edm.String" Nullable="false" MaxLength="30" sap:unicode="false" sap:label="Agreement Origin" sap:updatable="false"/>
                <Property Name="MKT_AgreementExternalID" Type="Edm.String" Nullable="false" MaxLength="80" sap:unicode="false" sap:label="Agreement ID" sap:updatable="false"/>
                <Property Name="MKT_AgrmtCancellationReason" Type="Edm.String" MaxLength="10" sap:unicode="false" sap:label="Cancellation Reason"/>
                <Property Name="ContactID" Type="Edm.String" Nullable="false" MaxLength="255" sap:unicode="false" sap:label="External Contact ID"/>
                <Property Name="ContactOrigin" Type="Edm.String" Nullable="false" MaxLength="20" sap:unicode="false" sap:label="Origin of Contact"/>
                <Property Name="MKT_AgreementIsBundle" Type="Edm.Boolean" sap:unicode="false" sap:label="Agreement Is Bundle"/>
                <Property Name="MKT_AgreementIsBundleMember" Type="Edm.Boolean" sap:unicode="false" sap:label="Is Member of Bundle"/>
                <Property Name="MKT_AgreementType" Type="Edm.String" Nullable="false" MaxLength="10" sap:unicode="false" sap:label="Agreement Type"/>
                <Property Name="MKT_MarketingArea" Type="Edm.String" MaxLength="40" sap:unicode="false" sap:label="Marketing Area ID"/>
                <Property Name="MKT_AgreementStartDateTime" Type="Edm.DateTimeOffset" Nullable="false" Precision="0" sap:unicode="false" sap:label="Agrmt Start Date"/>
                <Property Name="MKT_AgreementEndDateTime" Type="Edm.DateTimeOffset" Nullable="false" Precision="0" sap:unicode="false" sap:label="Agrmt End Date"/>
                <Property Name="MKT_AgreementIsCanceled" Type="Edm.Boolean" sap:unicode="false" sap:label="Cancelled"/>
                <Property Name="OriginDataLastChgUTCDateTime" Type="Edm.DateTimeOffset" Precision="7" sap:unicode="false" sap:label="Origin Timestamp"/>
                <Property Name="MKT_AgreementBundleOrigin" Type="Edm.String" MaxLength="30" sap:unicode="false" sap:label="Agrmt Bundle Origin"/>
                <Property Name="MKT_AgreementBundleExternalID" Type="Edm.String" MaxLength="80" sap:unicode="false" sap:label="Agrmt Bundle ID"/>
                <Property Name="MKT_AgrmtBundleStartDateTime" Type="Edm.DateTimeOffset" Precision="0" sap:unicode="false" sap:label="Bundle Start Date"/>
                <NavigationProperty Name="AgrmtAdditionalExtID" Relationship="API_MKT_AGREEMENT_SRV.AgreementToAgrmtAdditionalExtID" FromRole="FromRole_AgreementToAgrmtAdditionalExtID" ToRole="ToRole_AgreementToAgrmtAdditionalExtID"/>
                <NavigationProperty Name="AgreementTerms" Relationship="API_MKT_AGREEMENT_SRV.AgreementToAgreementTerms" FromRole="FromRole_AgreementToAgreementTerms" ToRole="ToRole_AgreementToAgreementTerms"/>
            </EntityType>
            <EntityType Name="AgreementTerms" sap:content-version="1">
                <Key>
                    <PropertyRef Name="MKT_AgreementOrigin"/>
                    <PropertyRef Name="MKT_AgreementExternalID"/>
                    <PropertyRef Name="MKT_AgrmtTermsStartDateTime"/>
                    <PropertyRef Name="MKT_AgrmtTermsEndDateTime"/>
                </Key>
                <Property Name="MKT_AgreementOrigin" Type="Edm.String" Nullable="false" MaxLength="30" sap:unicode="false" sap:label="Agreement Origin" sap:updatable="false"/>
                <Property Name="MKT_AgreementExternalID" Type="Edm.String" Nullable="false" MaxLength="80" sap:unicode="false" sap:label="Agreement ID" sap:updatable="false"/>
                <Property Name="MKT_AgrmtTermsStartDateTime" Type="Edm.DateTimeOffset" Nullable="false" Precision="0" sap:unicode="false" sap:label="Time Slice Start"/>
                <Property Name="MKT_AgrmtTermsEndDateTime" Type="Edm.DateTimeOffset" Nullable="false" Precision="0" sap:unicode="false" sap:label="Time Slice End"/>
                <Property Name="MKT_AgreementStatus" Type="Edm.String" Nullable="false" MaxLength="1" sap:unicode="false" sap:label="Agreement Status"/>
                <Property Name="ProductOrigin" Type="Edm.String" MaxLength="30" sap:unicode="false" sap:label="Origin of Product"/>
                <Property Name="ProductID" Type="Edm.String" MaxLength="50" sap:unicode="false" sap:label="Product ID"/>
                <Property Name="MKT_AgrmtCanclnConditions" Type="Edm.String" MaxLength="10" sap:unicode="false" sap:label="Cancln Conditions"/>
                <Property Name="MKT_AgrmtCanclnDcsnToDateTime" Type="Edm.DateTimeOffset" Precision="0" sap:unicode="false" sap:label="Canceln Decision D."/>
                <Property Name="MKT_AgreementRenewalType" Type="Edm.String" MaxLength="1" sap:unicode="false" sap:label="Renewal Type"/>
                <Property Name="MKT_AgrmtProlngnDcsnFromDteTme" Type="Edm.DateTimeOffset" Precision="0" sap:unicode="false" sap:label="Prolong. Decision D."/>
                <Property Name="MKT_AgrmtPaymentIsInAdvance" Type="Edm.Boolean" sap:unicode="false" sap:label="Payment In Advance"/>
                <Property Name="MKT_AgreementPaymentFrequency" Type="Edm.String" MaxLength="4" sap:unicode="false" sap:label="Payment Frequency"/>
                <Property Name="MKT_AgrmtBundleProductOrigin" Type="Edm.String" MaxLength="30" sap:unicode="false" sap:label="Agr Bundle Org Prod"/>
                <Property Name="MKT_AgrmtBundleProductID" Type="Edm.String" MaxLength="50" sap:unicode="false" sap:label="Agrmt Bundle Product"/>
                <Property Name="OriginDataLastChgUTCDateTime" Type="Edm.DateTimeOffset" Precision="7" sap:unicode="false" sap:label="Origin Timestamp"/>
            </EntityType>
            <Association Name="AgreementToAgreementTerms" sap:content-version="1">
                <End Type="API_MKT_AGREEMENT_SRV.Agreement" Multiplicity="1" Role="FromRole_AgreementToAgreementTerms"/>
                <End Type="API_MKT_AGREEMENT_SRV.AgreementTerms" Multiplicity="*" Role="ToRole_AgreementToAgreementTerms"/>
                <ReferentialConstraint>
                    <Principal Role="FromRole_AgreementToAgreementTerms">
                        <PropertyRef Name="MKT_AgreementExternalID"/>
                        <PropertyRef Name="MKT_AgreementOrigin"/>
                    </Principal>
                    <Dependent Role="ToRole_AgreementToAgreementTerms">
                        <PropertyRef Name="MKT_AgreementExternalID"/>
                        <PropertyRef Name="MKT_AgreementOrigin"/>
                    </Dependent>
                </ReferentialConstraint>
            </Association>
            <Association Name="AgreementToAgrmtAdditionalExtID" sap:content-version="1">
                <End Type="API_MKT_AGREEMENT_SRV.Agreement" Multiplicity="1" Role="FromRole_AgreementToAgrmtAdditionalExtID"/>
                <End Type="API_MKT_AGREEMENT_SRV.AgrmtAdditionalExtID" Multiplicity="*" Role="ToRole_AgreementToAgrmtAdditionalExtID"/>
                <ReferentialConstraint>
                    <Principal Role="FromRole_AgreementToAgrmtAdditionalExtID">
                        <PropertyRef Name="MKT_AgreementExternalID"/>
                        <PropertyRef Name="MKT_AgreementOrigin"/>
                    </Principal>
                    <Dependent Role="ToRole_AgreementToAgrmtAdditionalExtID">
                        <PropertyRef Name="MKT_AgreementExternalID"/>
                        <PropertyRef Name="MKT_AgreementOrigin"/>
                    </Dependent>
                </ReferentialConstraint>
            </Association>
            <EntityContainer Name="API_MKT_AGREEMENT_SRV_Entities" m:IsDefaultEntityContainer="true" sap:supported-formats="atom json xlsx">
                <EntitySet Name="AgrmtAdditionalExtIDs" EntityType="API_MKT_AGREEMENT_SRV.AgrmtAdditionalExtID" sap:label="Agreement Additional IDs" sap:searchable="true" sap:content-version="1"/>
                <EntitySet Name="Agreements" EntityType="API_MKT_AGREEMENT_SRV.Agreement" sap:label="Agreement" sap:deletable="false" sap:searchable="true" sap:content-version="1"/>
                <EntitySet Name="AgreementTerms" EntityType="API_MKT_AGREEMENT_SRV.AgreementTerms" sap:label="Agreement Terms" sap:deletable="false" sap:searchable="true" sap:content-version="1"/>
                <AssociationSet Name="AgreementToAgreementTermsSet" Association="API_MKT_AGREEMENT_SRV.AgreementToAgreementTerms" sap:creatable="false" sap:updatable="false" sap:deletable="false" sap:content-version="1">
                    <End EntitySet="Agreements" Role="FromRole_AgreementToAgreementTerms"/>
                    <End EntitySet="AgreementTerms" Role="ToRole_AgreementToAgreementTerms"/>
                </AssociationSet>
                <AssociationSet Name="AgreementToAgrmtAdditionalExtIDSet" Association="API_MKT_AGREEMENT_SRV.AgreementToAgrmtAdditionalExtID" sap:creatable="false" sap:updatable="false" sap:deletable="false" sap:content-version="1">
                    <End EntitySet="Agreements" Role="FromRole_AgreementToAgrmtAdditionalExtID"/>
                    <End EntitySet="AgrmtAdditionalExtIDs" Role="ToRole_AgreementToAgrmtAdditionalExtID"/>
                </AssociationSet>
            </EntityContainer>
            <atom:link rel="self" href="https://xf-demo-mkt.demo.hybris.com/sap/opu/odata/sap/API_MKT_AGREEMENT_SRV/$metadata" 
                xmlns:atom="http://www.w3.org/2005/Atom"/>
            <atom:link rel="latest-version" href="https://xf-demo-mkt.demo.hybris.com/sap/opu/odata/sap/API_MKT_AGREEMENT_SRV/$metadata" 
                xmlns:atom="http://www.w3.org/2005/Atom"/>
        </Schema>
    </edmx:DataServices>
</edmx:Edmx>
`;
