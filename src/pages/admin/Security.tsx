import { Shield, Lock, Key, Eye, CheckCircle, AlertCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Security = () => {
  const zkFeatures = [
    {
      icon: Shield,
      title: "Zero-Knowledge Proofs",
      description: "Enable privacy-preserving verification without revealing sensitive data",
      status: "active",
      details: "Using zk-SNARKs to verify loan conditions without exposing user balances"
    },
    {
      icon: Lock,
      title: "Private Transactions",
      description: "All lending and borrowing activities are encrypted and private",
      status: "active",
      details: "Transaction amounts and user addresses are cryptographically hidden"
    },
    {
      icon: Key,
      title: "Secure Key Management",
      description: "Multi-signature wallets with threshold cryptography",
      status: "active",
      details: "Protocol treasury secured with 5-of-7 multisig requiring ZK proof verification"
    },
    {
      icon: Eye,
      title: "Audited Smart Contracts",
      description: "Regular security audits by top Web3 firms",
      status: "verified",
      details: "Last audit: June 2025 by Trail of Bits - No critical issues found"
    },
  ];

  const securityMetrics = [
    { label: "ZK Proofs Generated", value: "15,642", trend: "+18.7%", progress: 87 },
    { label: "Private Transactions", value: "98.2%", trend: "+2.1%", progress: 98 },
    { label: "Security Score", value: "A+", trend: "Maintained", progress: 95 },
    { label: "Uptime", value: "99.9%", trend: "Last 30 days", progress: 99 },
  ];

  return (
    <div className="p-8 space-y-8">
      <div className="animate-slide-in-left">
        <h1 className="text-3xl font-bold text-[hsl(var(--admin-text))] mb-2">Zero-Knowledge Security</h1>
        <p className="text-[hsl(var(--admin-muted))]">Privacy-preserving protocol security powered by Web3</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {securityMetrics.map((metric, index) => (
          <div
            key={metric.label}
            className="admin-card p-6 animate-slide-in-left"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <h3 className="text-sm text-[hsl(var(--admin-muted))] mb-2">{metric.label}</h3>
            <p className="text-3xl font-bold text-[hsl(var(--admin-text))] mb-3 animate-count-up">{metric.value}</p>
            <Progress value={metric.progress} className="h-2 mb-2" />
            <span className="text-xs text-[hsl(var(--admin-success))]">{metric.trend}</span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {zkFeatures.map((feature, index) => (
          <div
            key={feature.title}
            className="admin-card p-6 animate-slide-in-left"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 rounded-lg bg-[hsl(var(--admin-accent))]/10">
                <feature.icon className="w-6 h-6 text-[hsl(var(--admin-accent))]" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-[hsl(var(--admin-text))]">{feature.title}</h3>
                  {feature.status === "active" ? (
                    <CheckCircle className="w-5 h-5 text-[hsl(var(--admin-success))]" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-[hsl(var(--admin-accent))]" />
                  )}
                </div>
                <p className="text-[hsl(var(--admin-muted))] mb-3">{feature.description}</p>
                <div className="p-3 rounded-lg bg-[hsl(var(--admin-bg))] border border-[hsl(var(--admin-border))]">
                  <p className="text-sm text-[hsl(var(--admin-text))]">{feature.details}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="admin-card p-6">
        <h3 className="text-xl font-bold text-[hsl(var(--admin-text))] mb-4">How Zero-Knowledge Proofs Work</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-[hsl(var(--admin-accent))] flex items-center justify-center text-white font-bold text-xl mb-4">
              1
            </div>
            <div className="pt-16 text-center">
              <h4 className="text-lg font-semibold text-[hsl(var(--admin-text))] mb-2">Prover</h4>
              <p className="text-sm text-[hsl(var(--admin-muted))]">
                User creates a cryptographic proof that they meet loan requirements without revealing actual data
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-[hsl(var(--admin-accent))] flex items-center justify-center text-white font-bold text-xl mb-4">
              2
            </div>
            <div className="pt-16 text-center">
              <h4 className="text-lg font-semibold text-[hsl(var(--admin-text))] mb-2">Verification</h4>
              <p className="text-sm text-[hsl(var(--admin-muted))]">
                Smart contract verifies the proof on-chain without accessing private information
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-[hsl(var(--admin-success))] flex items-center justify-center text-white font-bold text-xl mb-4">
              ✓
            </div>
            <div className="pt-16 text-center">
              <h4 className="text-lg font-semibold text-[hsl(var(--admin-text))] mb-2">Privacy Preserved</h4>
              <p className="text-sm text-[hsl(var(--admin-muted))]">
                Transaction approved while keeping balances, collateral amounts, and user identity private
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Security;
