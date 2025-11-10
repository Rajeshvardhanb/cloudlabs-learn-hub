import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FileText, Github, Search, Download, ExternalLink } from "lucide-react";

const documents = [
  {
    title: "AWS IAM Essentials",
    description: "Complete guide to AWS Identity and Access Management best practices",
    type: "pdf",
    category: "AWS",
  },
  {
    title: "Terraform State Management Guide",
    description: "Advanced patterns for managing Terraform state in production environments",
    type: "pdf",
    category: "Terraform",
  },
  {
    title: "DevSecOps Checklist",
    description: "Comprehensive security checklist for CI/CD pipelines",
    type: "pdf",
    category: "DevSecOps",
  },
  {
    title: "Kubernetes Security Hardening",
    description: "Step-by-step guide to securing your Kubernetes clusters",
    type: "pdf",
    category: "Kubernetes",
  },
  {
    title: "Sample Terraform Modules",
    description: "Production-ready Terraform modules for AWS infrastructure",
    type: "github",
    category: "Terraform",
  },
  {
    title: "CI/CD Pipeline Templates",
    description: "Reusable pipeline templates for Jenkins, GitLab CI, and GitHub Actions",
    type: "github",
    category: "DevSecOps",
  },
  {
    title: "AWS CloudFormation Templates",
    description: "Infrastructure as code templates for common AWS architectures",
    type: "github",
    category: "AWS",
  },
  {
    title: "Docker Security Best Practices",
    description: "Guide to building and running secure container images",
    type: "pdf",
    category: "Docker",
  },
  {
    title: "Ansible Playbook Examples",
    description: "Collection of Ansible playbooks for infrastructure automation",
    type: "github",
    category: "Ansible",
  },
];

const Documentation = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredDocs = documents.filter(
    (doc) =>
      doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container p-6 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-heading font-bold mb-2">Documentation</h1>
        <p className="text-muted-foreground">
          Technical guides, templates, and resources to support your learning
        </p>
      </div>

      {/* Search */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search documentation..."
          className="pl-9"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Documents Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredDocs.map((doc, index) => (
          <Card key={index} className="group hover:shadow-hover transition-shadow">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-start justify-between">
                <div className="rounded-lg bg-primary/10 p-3">
                  {doc.type === "pdf" ? (
                    <FileText className="h-6 w-6 text-primary" />
                  ) : (
                    <Github className="h-6 w-6 text-primary" />
                  )}
                </div>
                <span className="text-xs font-medium text-muted-foreground px-2 py-1 bg-muted rounded">
                  {doc.category}
                </span>
              </div>

              <div>
                <h3 className="font-heading font-bold mb-2">{doc.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {doc.description}
                </p>
              </div>

              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="flex-1">
                  {doc.type === "pdf" ? (
                    <>
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </>
                  ) : (
                    <>
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View on GitHub
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredDocs.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No documents found matching your search.</p>
        </div>
      )}
    </div>
  );
};

export default Documentation;
